"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = exports.isBooleanRecord = exports.isNumberRecord = exports.isStringRecord = exports.parseParamDecorator = exports.generateURL = exports.replaceParameters = exports.SpeakeasyMetadata = exports.SpeakeasyBase = void 0;
require("reflect-metadata");
var pathparams_1 = require("./pathparams");
function isSpeakeasyBase(type) {
    var _a;
    return type && ((_a = Object.getPrototypeOf(type)) === null || _a === void 0 ? void 0 : _a.name) == "SpeakeasyBase";
}
function handleArray(value, elemType, elemDepth) {
    if (!Array.isArray(value)) {
        return value;
    }
    if (elemDepth == 1) {
        return value.map(function (v) { return new elemType(v); });
    }
    else {
        return value.map(function (v) {
            if (Array.isArray(v)) {
                return handleArray(v, elemType, elemDepth - 1);
            }
            else if (typeof v == "object") {
                return handleObject(v, elemType, elemDepth - 1);
            }
            else {
                return v;
            }
        });
    }
}
function handleObject(value, elemType, elemDepth) {
    if (typeof value != "object") {
        return value;
    }
    if (elemDepth == 1) {
        return Object.keys(value).reduce(function (acc, key) {
            acc[key] = new elemType(value[key]);
            return acc;
        }, {});
    }
    else {
        return Object.keys(value).reduce(function (acc, key) {
            var v = value[key];
            if (Array.isArray(v)) {
                acc[key] = handleArray(v, elemType, elemDepth - 1);
            }
            else if (typeof v == "object") {
                acc[key] = handleObject(v, elemType, elemDepth - 1);
            }
            else {
                acc[key] = v;
            }
            return acc;
        }, {});
    }
}
var SpeakeasyBase = /** @class */ (function () {
    function SpeakeasyBase(payload) {
        var props = this["__props__"];
        if (props) {
            for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                var prop = props_1[_i];
                if (payload && payload.hasOwnProperty(prop.key)) {
                    var value = payload[prop.key];
                    if (isSpeakeasyBase(prop.type)) {
                        this[prop.key] = new prop.type(value);
                    }
                    else if (prop.type.name == "Array" &&
                        isSpeakeasyBase(prop.elemType)) {
                        this[prop.key] = handleArray(value, prop.elemType, prop.elemDepth);
                    }
                    else if (prop.type.name == "Object" &&
                        isSpeakeasyBase(prop.elemType)) {
                        this[prop.key] = handleObject(value, prop.elemType, prop.elemDepth);
                    }
                    else {
                        this[prop.key] = value;
                    }
                }
            }
        }
    }
    return SpeakeasyBase;
}());
exports.SpeakeasyBase = SpeakeasyBase;
function SpeakeasyMetadata(params) {
    return function (target, propertyKey) {
        if (params === null || params === void 0 ? void 0 : params.data) {
            var annsArr = params.data.split(", ");
            for (var i = 0; i < annsArr.length; i += 2) {
                Reflect.defineMetadata(annsArr[i], annsArr[i + 1], target, propertyKey);
            }
        }
        var props;
        if (target.hasOwnProperty("__props__")) {
            props = target["__props__"];
        }
        else {
            props = target["__props__"] = [];
        }
        var prop = {
            key: propertyKey,
            type: Reflect.getMetadata("design:type", target, propertyKey),
        };
        if (params === null || params === void 0 ? void 0 : params.elemType) {
            prop.elemType = params.elemType;
            prop.elemDepth = params.elemDepth || 1;
        }
        props.push(prop);
    };
}
exports.SpeakeasyMetadata = SpeakeasyMetadata;
function replaceParameters(stringWithParams, params) {
    var res = stringWithParams;
    params.forEach(function (value, key) {
        var match = "{" + key + "}";
        res = res.replaceAll(match, value);
    });
    return res;
}
exports.replaceParameters = replaceParameters;
function generateURL(serverURL, path, pathParams) {
    var url = serverURL.replace(/\/$/, "") + path;
    var parsedParameters = new Map();
    var fieldNames = Object.getOwnPropertyNames(pathParams);
    fieldNames.forEach(function (fname) {
        var ppAnn = Reflect.getMetadata(pathparams_1.ppMetadataKey, pathParams, fname);
        if (ppAnn == null)
            return;
        var ppDecorator = parseParamDecorator(ppAnn, fname, "simple", false);
        if (ppDecorator == null)
            return;
        switch (ppDecorator.Style) {
            case "simple":
                var simpleParams = (0, pathparams_1.getSimplePathParams)(ppDecorator.ParamName, pathParams[fname], ppDecorator.Explode);
                simpleParams.forEach(function (value, key) {
                    parsedParameters.set(key, value);
                });
        }
    });
    return replaceParameters(url, parsedParameters);
}
exports.generateURL = generateURL;
function parseParamDecorator(ann, fName, defaultStyle, defaultExplode) {
    // style=simple;explode=false;name=apiID
    var decorator = new pathparams_1.ParamDecorator(defaultStyle, defaultExplode, fName.toLowerCase());
    ann.split(";").forEach(function (annPart) {
        var _a = annPart.split("="), paramKey = _a[0], paramVal = _a[1];
        switch (paramKey) {
            case "style":
                decorator.Style = paramVal;
                break;
            case "explode":
                decorator.Explode = paramVal == "true";
                break;
            case "name":
                decorator.ParamName = paramVal;
                break;
            case "serialization":
                decorator.Serialization = paramVal;
        }
    });
    return decorator;
}
exports.parseParamDecorator = parseParamDecorator;
function isStringRecord(obj) {
    if (typeof obj !== "object")
        return false;
    if (Object.getOwnPropertySymbols(obj).length > 0)
        return false;
    return Object.getOwnPropertyNames(obj)
        .every(function (prop) { return typeof obj[prop] === "string"; });
}
exports.isStringRecord = isStringRecord;
function isNumberRecord(obj) {
    if (typeof obj !== "object")
        return false;
    if (Object.getOwnPropertySymbols(obj).length > 0)
        return false;
    return Object.getOwnPropertyNames(obj)
        .every(function (prop) { return typeof obj[prop] === "number"; });
}
exports.isNumberRecord = isNumberRecord;
function isBooleanRecord(obj) {
    if (typeof obj !== "object")
        return false;
    if (Object.getOwnPropertySymbols(obj).length > 0)
        return false;
    return Object.getOwnPropertyNames(obj)
        .every(function (prop) { return typeof obj[prop] === "boolean"; });
}
exports.isBooleanRecord = isBooleanRecord;
function isEmpty(value) {
    // check for undefined, null, and NaN
    var res = false;
    if (typeof value === "number")
        res = Number.isNaN(value);
    else if (typeof value === "string")
        res = value === "";
    return res || value == null;
}
exports.isEmpty = isEmpty;
