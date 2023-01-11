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
exports.LandlordController = void 0;
var operations = __importStar(require("./models/operations"));
var utils = __importStar(require("../internal/utils"));
var LandlordController = /** @class */ (function () {
    function LandlordController(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * landlordControllerCreateMaintenancePreference - Post tenancy maintenance preferences:-
    **/
    LandlordController.prototype.landlordControllerCreateMaintenancePreference = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.LandlordControllerCreateMaintenancePreferenceRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/tenancy/maintenance/preference", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "post" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.landlordControllerCreateMaintenancePreference200ApplicationJSONString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    if (utils.matchContentType(contentType, "application/xml")) {
                        res.landlordControllerCreateMaintenancePreference200ApplicationXMLString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    if (utils.matchContentType(contentType, "text/json")) {
                        res.landlordControllerCreateMaintenancePreference200TextJSONString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    if (utils.matchContentType(contentType, "text/xml")) {
                        res.landlordControllerCreateMaintenancePreference200TextXMLString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * landlordControllerGetAccounts - Get the accounting details for the landlord.
    **/
    LandlordController.prototype.landlordControllerGetAccounts = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.LandlordControllerGetAccountsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/accounting", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.landlordAccountingModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "text/json")) {
                        res.landlordAccountingModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * landlordControllerGetDocument - Download a Document
    **/
    LandlordController.prototype.landlordControllerGetDocument = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.LandlordControllerGetDocumentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/document", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.object = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "text/json")) {
                        res.object = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.matchContentType(contentType, "text/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * landlordControllerGetInvetoryReport - Generate a Inventory PDF for a tenancy
    **/
    LandlordController.prototype.landlordControllerGetInvetoryReport = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.LandlordControllerGetInvetoryReportRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/inventory", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.object = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "text/json")) {
                        res.object = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.matchContentType(contentType, "text/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * landlordControllerGetInvoice - Get an invoice pdf belonging to the landlord.
    **/
    LandlordController.prototype.landlordControllerGetInvoice = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.LandlordControllerGetInvoiceRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/invoice", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.object = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "text/json")) {
                        res.object = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.matchContentType(contentType, "text/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * landlordControllerGetLandlordCrmEntries - Retrieve landlord's CRM ID
    **/
    LandlordController.prototype.landlordControllerGetLandlordCrmEntries = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.LandlordControllerGetLandlordCrmEntriesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/landlordcrmentries", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.landlordCrmEntries = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "text/json")) {
                        res.landlordCrmEntries = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.matchContentType(contentType, "text/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * landlordControllerGetMaintenanceJobs - Get Active maintenance jobs.
    **/
    LandlordController.prototype.landlordControllerGetMaintenanceJobs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.LandlordControllerGetMaintenanceJobsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/maintenance", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.landlordMaintenanceModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "text/json")) {
                        res.landlordMaintenanceModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * landlordControllerGetProfitLossReport - Generate a Profit and Loss Report
    **/
    LandlordController.prototype.landlordControllerGetProfitLossReport = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.LandlordControllerGetProfitLossReportRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/profitloss", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.landlordProfitLossModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "text/json")) {
                        res.landlordProfitLossModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * landlordControllerGetRentArrears - Rent Arrears
    **/
    LandlordController.prototype.landlordControllerGetRentArrears = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.LandlordControllerGetRentArrearsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/rentarrears", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.landlordRentArrearsModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "text/json")) {
                        res.landlordRentArrearsModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * landlordControllerGetSasReport - Generate a Self Assessment Tax Report
    **/
    LandlordController.prototype.landlordControllerGetSasReport = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.LandlordControllerGetSasReportRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/sas", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.object = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "text/json")) {
                        res.object = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.matchContentType(contentType, "text/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * landlordControllerGetSettings - Get contact details of all linked landlords.
    **/
    LandlordController.prototype.landlordControllerGetSettings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.LandlordControllerGetSettingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/settings", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.landlordSettingsModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "text/json")) {
                        res.landlordSettingsModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * landlordControllerGetSummaryDetails - Get the summary details for the landlord.
    **/
    LandlordController.prototype.landlordControllerGetSummaryDetails = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.LandlordControllerGetSummaryDetailsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/summary", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.landlordSummaryModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "text/json")) {
                        res.landlordSummaryModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * landlordControllerGetTenancy - Get tenancy details.
    **/
    LandlordController.prototype.landlordControllerGetTenancy = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.LandlordControllerGetTenancyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/tenancy", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.landlordTenancyModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "text/json")) {
                        res.landlordTenancyModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * landlordControllerGetTenancyAgreementReport - Generate a Tenancy Agreement Copy (PDF)
    **/
    LandlordController.prototype.landlordControllerGetTenancyAgreementReport = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.LandlordControllerGetTenancyAgreementReportRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v2/customer/{shortName}/landlord/tenancyagreement", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.object = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "text/json")) {
                        res.object = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.matchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.matchContentType(contentType, "text/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
            }
            return res;
        });
    };
    return LandlordController;
}());
exports.LandlordController = LandlordController;
