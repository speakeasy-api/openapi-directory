"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeRequestBody = void 0;
var form_data_1 = __importDefault(require("form-data"));
var requestMetadataKey = "request";
var mpFormMetadataKey = "multipart_form";
function serializeRequestBody(request) {
    if (!request.hasOwnProperty(requestMetadataKey)) {
        throw new Error("request body not found");
    }
    var requestBodyObj = request[requestMetadataKey];
    var fieldNames = Object.getOwnPropertyNames(requestBodyObj);
    var _a = [{}, {}], requestHeaders = _a[0], requestBody = _a[1];
    fieldNames.forEach(function (fname) {
        var _a, _b;
        var requestAnn = Reflect.getMetadata(requestMetadataKey, requestBodyObj, fname);
        if (requestAnn == null)
            return;
        var requestDecorator = parseRequestDecorator(requestAnn);
        switch (requestDecorator.MediaType) {
            case "multipart/form-data":
            case "multipart/mixed":
                requestBody = encodeMultipartFormData(requestBodyObj[fname]);
                requestHeaders = requestBody.getHeaders();
                break;
            case "application/x-www-form-urlencoded":
                _a = [
                    { "Content-Type": "".concat(requestDecorator.MediaType) },
                    encodeFormUrlEncodeData(requestBodyObj[fname])
                ], requestHeaders = _a[0], requestBody = _a[1];
                break;
            case "application/json":
            case "text/json":
                _b = [
                    { "Content-Type": "".concat(requestDecorator.MediaType) },
                    __assign({}, requestBodyObj[fname]),
                ], requestHeaders = _b[0], requestBody = _b[1];
                break;
            default:
                requestBody = requestBodyObj[fname];
                var requestBodyType = typeof requestBody;
                if (requestBodyType === "string" ||
                    requestBody instanceof String ||
                    requestBody instanceof Uint8Array)
                    requestHeaders = { "Content-Type": "".concat(requestDecorator.MediaType) };
                else
                    throw new Error("invalid request body type ".concat(requestBodyType, " for mediaType ").concat(requestDecorator.MediaType));
        }
    });
    return [requestHeaders, requestBody];
}
exports.serializeRequestBody = serializeRequestBody;
var encodeFormUrlEncodeData = function (data) {
    var formData = new form_data_1.default();
    var fieldNames = Object.getOwnPropertyNames(data);
    fieldNames.forEach(function (fname) {
        var _a;
        var formAnn = Reflect.getMetadata("form", data, fname);
        if (formAnn === null) {
            return;
        }
        var annotation = parseFormMetadata(formAnn);
        if (annotation.json) {
            formData.append((_a = annotation.name) !== null && _a !== void 0 ? _a : fname, JSON.stringify(data[fname]));
            return;
        }
        if (annotation.style === "form") {
            var parsed_1;
            if (annotation.explode === true) {
                parsed_1 = formExplode(fname, data[fname]);
            }
            else {
                parsed_1 = formNotExplode(fname, data[fname]);
            }
            Object.keys(parsed_1).forEach(function (key) {
                parsed_1[key].forEach(function (v) {
                    return formData.append(key, v);
                });
            });
            return;
        }
    });
    return formData;
};
var formExplode = function (fname, data) {
    var exploded = {};
    if (Array.isArray(data)) {
        data.forEach(function (value) {
            if (!exploded[fname]) {
                exploded[fname] = [];
            }
            exploded[fname].push(value);
        });
    }
    else {
        if (typeof data === "object") {
            Object.keys(data).forEach(function (key) {
                if (!exploded[key]) {
                    exploded[key] = [];
                }
                exploded[key].push(data[key]);
            });
        }
        else {
            if (!exploded[fname]) {
                exploded[fname] = [];
            }
            exploded[fname].push(data.toString());
        }
    }
    return exploded;
};
var formNotExplode = function (fname, data) {
    var notExploded = {};
    if (Array.isArray(data)) {
        if (!notExploded[fname]) {
            notExploded[fname] = [];
        }
        notExploded[fname].push(data
            .map(function (item) { return item.toString(); })
            .join(","));
    }
    else {
        if (typeof data === "object") {
            Object.keys(data).forEach(function (key) {
                if (!notExploded[key]) {
                    notExploded[key] = [];
                }
                notExploded[fname].push("".concat(key, "=").concat(data[key]));
            });
        }
        else {
            if (!notExploded[fname]) {
                notExploded[fname] = [];
            }
            notExploded[fname].push(data.toString());
        }
    }
    return notExploded;
};
var parseFormMetadata = function (formAnn) {
    return formAnn.split(";").map(function (keyValue) {
        var split = keyValue.split("=");
        if (split.length !== 2) {
            throw new Error("Unable to parse form metadata \"".concat(keyValue, "\""));
        }
        var obj = {};
        obj[split[0]] = split[0] === "explode" || split[0] === "json" ? split[1] === "true" : split[1];
        return obj;
    }).reduce(function (accum, cur) { return (__assign(__assign({}, accum), cur)); });
};
function encodeMultipartFormData(form) {
    var formData = new form_data_1.default();
    var fieldNames = Object.getOwnPropertyNames(form);
    fieldNames.forEach(function (fname) {
        var mpFormAnn = Reflect.getMetadata(mpFormMetadataKey, form, fname);
        if (mpFormAnn == null)
            return;
        var mpFormDecorator = parseMultipartFormDecorator(mpFormAnn);
        if (mpFormDecorator.File)
            return encodeMultipartFormDataFile(formData, form[fname]);
        else if (mpFormDecorator.JSON) {
            formData.append(mpFormDecorator.Name, JSON.stringify(form[fname]));
        }
        else {
            if (Array.isArray(form[fname])) {
                form[fname].forEach(function (val) {
                    formData.append(mpFormDecorator.Name + "[]", String(val));
                });
            }
            else {
                formData.append(mpFormDecorator.Name, String(form[fname]));
            }
        }
    });
    return formData;
}
function encodeMultipartFormDataFile(formData, file) {
    if (typeof file !== "object" || Array.isArray(file) || file == null) {
        throw new Error("invalid type for multipart/form-data file");
    }
    var fieldNames = Object.getOwnPropertyNames(file);
    var content = null;
    var fileName = "";
    var mpFormDecoratorName = "";
    fieldNames.forEach(function (fname) {
        var mpFormAnn = Reflect.getMetadata(mpFormMetadataKey, file, fname);
        if (mpFormAnn == null)
            return;
        var mpFormDecorator = parseMultipartFormDecorator(mpFormAnn);
        if (!mpFormDecorator.Content && mpFormDecorator.Name == "")
            return;
        if (mpFormDecorator.Content)
            content = file[fname];
        else {
            mpFormDecoratorName = mpFormDecorator.Name;
            fileName = file[fname];
        }
    });
    if (mpFormDecoratorName === "" || fileName === "" || content == null) {
        throw new Error("invalid multipart/form-data file");
    }
    formData.append("file", Buffer.from(content), fileName);
    return formData;
}
function parseMultipartFormDecorator(mpFormAnn) {
    // example "name=file"
    var mpFormDecorator = new MultipartFormDecorator(false, false, false, "");
    mpFormAnn.split(";").forEach(function (mpFormAnnPart) {
        var _a = mpFormAnnPart.split("="), mpFormKey = _a[0], mpFormVal = _a[1];
        switch (mpFormKey) {
            case "file":
                mpFormDecorator.File = mpFormVal == "true";
                break;
            case "content":
                mpFormDecorator.Content = mpFormVal == "true";
                break;
            case "name":
                mpFormDecorator.Name = mpFormVal;
                break;
            case "json":
                mpFormDecorator.JSON = mpFormVal == "true";
        }
    });
    return mpFormDecorator;
}
var MultipartFormDecorator = /** @class */ (function () {
    function MultipartFormDecorator(File, Content, JSON, Name) {
        this.File = File;
        this.Content = Content;
        this.JSON = JSON;
        this.Name = Name;
    }
    return MultipartFormDecorator;
}());
function parseRequestDecorator(requestAnn) {
    // example "media_type=multipart/form-data"
    var requestDecorator = new RequestDecorator("application/octet-stream");
    var _a = requestAnn.split("="), mediaTypeKey = _a[0], mediaTypeVal = _a[1];
    if (mediaTypeKey === "media_type")
        requestDecorator.MediaType = mediaTypeVal;
    return requestDecorator;
}
var RequestDecorator = /** @class */ (function () {
    function RequestDecorator(MediaType) {
        this.MediaType = MediaType;
    }
    return RequestDecorator;
}());
