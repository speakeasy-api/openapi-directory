"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
var utils = __importStar(require("../internal/utils"));
var operations = __importStar(require("./models/operations"));
var shared = __importStar(require("./models/shared"));
var Application = /** @class */ (function () {
    function Application(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * Deletes Application secret
     *
     * @remarks
     * Deletes an Application secret from the given resource location
     */
    Application.prototype.deleteApplicationSecret = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteApplicationSecretRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/Secret/{SecretId}", req);
        var client = this._defaultClient;
        var headers = __assign(__assign({}, utils.getHeadersFromRequest(req)), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "delete", headers: headers }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.DeleteApplicationSecretResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case [400, 401, 404, 500].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.errorModel = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ErrorModel);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Get Application secret
     *
     * @remarks
     * Get the public visible Application secret object
     */
    Application.prototype.getApplicationSecret = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetApplicationSecretRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/Secret/{SecretId}", req);
        var client = this._defaultClient;
        var headers = __assign(__assign({}, utils.getHeadersFromRequest(req)), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "get", headers: headers }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetApplicationSecretResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.applicationSecret = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case [400, 401, 404, 500].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.errorModel = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ErrorModel);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Get all Application secret links
     *
     * @remarks
     * Get all the Application secret links
     */
    Application.prototype.getApplicationSecrets = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetApplicationSecretsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/Secrets";
        var client = this._defaultClient;
        var headers = __assign(__assign({}, utils.getHeadersFromRequest(req)), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "get", headers: headers }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetApplicationSecretsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.linkCollection = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.LinkCollection);
                    }
                    break;
                case [400, 401, 404, 500].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.errorModel = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ErrorModel);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Create a new Application secret
     *
     * @remarks
     * Create new Application secret using auto generated resource location key
     */
    Application.prototype.postApplicationSecret = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostApplicationSecretRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/Secrets";
        var client = this._defaultClient;
        var headers = __assign(__assign({}, utils.getHeadersFromRequest(req)), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "post", headers: headers }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.PostApplicationSecretResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.link = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Link);
                    }
                    break;
                case [400, 401, 404, 500].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.errorModel = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ErrorModel);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Create a new Application secret
     *
     * @remarks
     * Create / update an Application secret at the given resource location
     */
    Application.prototype.putApplicationSecret = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutApplicationSecretRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/Secret/{SecretId}", req);
        var client = this._defaultClient;
        var headers = __assign(__assign({}, utils.getHeadersFromRequest(req)), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "put", headers: headers }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.PutApplicationSecretResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.applicationSecret = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case [400, 401, 404, 500].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.errorModel = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ErrorModel);
                    }
                    break;
            }
            return res;
        });
    };
    return Application;
}());
exports.Application = Application;
