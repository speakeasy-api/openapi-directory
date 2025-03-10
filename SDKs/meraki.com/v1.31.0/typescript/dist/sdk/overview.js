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
exports.Overview = void 0;
var utils = __importStar(require("../internal/utils"));
var operations = __importStar(require("./models/operations"));
var Overview = /** @class */ (function () {
    function Overview(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * Returns an overview of aggregate analytics data for a timespan
     *
     * @remarks
     * Returns an overview of aggregate analytics data for a timespan
     */
    Overview.prototype.getDeviceCameraAnalyticsOverview = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDeviceCameraAnalyticsOverviewRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/devices/{serial}/camera/analytics/overview", req);
        var client = this._securityClient || this._defaultClient;
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetDeviceCameraAnalyticsOverviewResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getDeviceCameraAnalyticsOverview200ApplicationJSONObjects =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Return overview statistics for network clients
     *
     * @remarks
     * Return overview statistics for network clients
     */
    Overview.prototype.getNetworkClientsOverview = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetNetworkClientsOverviewRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/networks/{networkId}/clients/overview", req);
        var client = this._securityClient || this._defaultClient;
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetNetworkClientsOverviewResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getNetworkClientsOverview200ApplicationJSONObject =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Return an overview of currently alerting sensors by metric
     *
     * @remarks
     * Return an overview of currently alerting sensors by metric
     */
    Overview.prototype.getNetworkSensorAlertsCurrentOverviewByMetric = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetNetworkSensorAlertsCurrentOverviewByMetricRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/networks/{networkId}/sensor/alerts/current/overview/byMetric", req);
        var client = this._securityClient || this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetNetworkSensorAlertsCurrentOverviewByMetricResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONObject =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.GetNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSON);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Return an overview of alert occurrences over a timespan, by metric
     *
     * @remarks
     * Return an overview of alert occurrences over a timespan, by metric
     */
    Overview.prototype.getNetworkSensorAlertsOverviewByMetric = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetNetworkSensorAlertsOverviewByMetricRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/networks/{networkId}/sensor/alerts/overview/byMetric", req);
        var client = this._securityClient || this._defaultClient;
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetNetworkSensorAlertsOverviewByMetricResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getNetworkSensorAlertsOverviewByMetric200ApplicationJSONObjects =
                            [];
                        var resFieldDepth = utils.getResFieldDepth(res);
                        res.getNetworkSensorAlertsOverviewByMetric200ApplicationJSONObjects =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.GetNetworkSensorAlertsOverviewByMetric200ApplicationJSON, resFieldDepth);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Returns adaptive policy aggregate statistics for an organization
     *
     * @remarks
     * Returns adaptive policy aggregate statistics for an organization
     */
    Overview.prototype.getOrganizationAdaptivePolicyOverview = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrganizationAdaptivePolicyOverviewRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationId}/adaptivePolicy/overview", req);
        var client = this._securityClient || this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetOrganizationAdaptivePolicyOverviewResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getOrganizationAdaptivePolicyOverview200ApplicationJSONObject =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.GetOrganizationAdaptivePolicyOverview200ApplicationJSON);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Return an aggregated overview of API requests data
     *
     * @remarks
     * Return an aggregated overview of API requests data
     */
    Overview.prototype.getOrganizationApiRequestsOverview = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrganizationApiRequestsOverviewRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationId}/apiRequests/overview", req);
        var client = this._securityClient || this._defaultClient;
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetOrganizationApiRequestsOverviewResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getOrganizationApiRequestsOverview200ApplicationJSONObject =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Tracks organizations' API requests by response code across a given time period
     *
     * @remarks
     * Tracks organizations' API requests by response code across a given time period
     */
    Overview.prototype.getOrganizationApiRequestsOverviewResponseCodesByInterval = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req =
                new operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationId}/apiRequests/overview/responseCodes/byInterval", req);
        var client = this._securityClient || this._defaultClient;
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects =
                            [];
                        var resFieldDepth = utils.getResFieldDepth(res);
                        res.getOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.GetOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSON, resFieldDepth);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Return summary information around client data usage (in mb) across the given organization.
     *
     * @remarks
     * Return summary information around client data usage (in mb) across the given organization.
     */
    Overview.prototype.getOrganizationClientsOverview = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrganizationClientsOverviewRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationId}/clients/overview", req);
        var client = this._securityClient || this._defaultClient;
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetOrganizationClientsOverviewResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getOrganizationClientsOverview200ApplicationJSONObject =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.GetOrganizationClientsOverview200ApplicationJSON);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Return an overview of current device statuses
     *
     * @remarks
     * Return an overview of current device statuses
     */
    Overview.prototype.getOrganizationDevicesStatusesOverview = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrganizationDevicesStatusesOverviewRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationId}/devices/statuses/overview", req);
        var client = this._securityClient || this._defaultClient;
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetOrganizationDevicesStatusesOverviewResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getOrganizationDevicesStatusesOverview200ApplicationJSONObject =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.GetOrganizationDevicesStatusesOverview200ApplicationJSON);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Return an overview of the license state for an organization
     *
     * @remarks
     * Return an overview of the license state for an organization
     */
    Overview.prototype.getOrganizationLicensesOverview = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrganizationLicensesOverviewRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationId}/licenses/overview", req);
        var client = this._securityClient || this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetOrganizationLicensesOverviewResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getOrganizationLicensesOverview200ApplicationJSONObject =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        });
    };
    return Overview;
}());
exports.Overview = Overview;
