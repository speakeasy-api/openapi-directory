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
exports.Qshow = void 0;
var utils = __importStar(require("../internal/utils"));
var operations = __importStar(require("./models/operations"));
/**
 * Access Qshow - quote collection service. Create curated quotes collection. You can group quotes by any way you want and access them as a single unit. You need an API key to access this service.
 */
var Qshow = /** @class */ (function () {
    function Qshow(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * Delete a qshow.
     *
     */
    Qshow.prototype.deleteQshow = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteQshowRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/qshow";
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteQshowSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.DeleteQshowResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case [200, 401, 404].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    break;
            }
            return res;
        });
    };
    /**
     * Gets a details about a qshow.
     *
     */
    Qshow.prototype.getQshow = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetQshowRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/qshow";
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetQshowSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetQshowResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case [200, 401, 404].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    break;
            }
            return res;
        });
    };
    /**
     * Get the list of Qshows in They Said So platform.
     */
    Qshow.prototype.getQshowList = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetQshowListRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/qshow/list";
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetQshowListSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetQshowListResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case [200, 401].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    break;
            }
            return res;
        });
    };
    /**
     * Get the quotes in a given Qshow.
     */
    Qshow.prototype.getQshowQuotes = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetQshowQuotesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/qshow/quotes";
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetQshowQuotesSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetQshowQuotesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case [200, 401, 404].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    break;
            }
            return res;
        });
    };
    /**
     * Update an existing qshow.
     */
    Qshow.prototype.patchQshow = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PatchQshowRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/qshow";
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PatchQshowSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "patch" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.PatchQshowResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case [200, 401, 404].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    break;
            }
            return res;
        });
    };
    /**
     * Add a quote to a given Qshow.
     */
    Qshow.prototype.postQshowQuotesAdd = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostQshowQuotesAddRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/qshow/quotes/add";
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PostQshowQuotesAddSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "post" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.PostQshowQuotesAddResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case [200, 401, 404].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    break;
            }
            return res;
        });
    };
    /**
     * Remove a quote to a given Qshow.
     */
    Qshow.prototype.postQshowQuotesRemove = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostQshowQuotesRemoveRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/qshow/quotes/remove";
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PostQshowQuotesRemoveSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "post" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.PostQshowQuotesRemoveResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case [200, 401, 404].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    break;
            }
            return res;
        });
    };
    /**
     * Create and add a new qshow to your private collection.
     */
    Qshow.prototype.putQshow = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutQshowRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/qshow";
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PutQshowSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "put" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.PutQshowResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case [200, 401].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    break;
            }
            return res;
        });
    };
    return Qshow;
}());
exports.Qshow = Qshow;
