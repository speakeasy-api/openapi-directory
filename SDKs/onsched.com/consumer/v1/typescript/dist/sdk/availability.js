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
exports.Availability = void 0;
var operations = __importStar(require("./models/operations"));
var utils = __importStar(require("../internal/utils"));
var Availability = /** @class */ (function () {
    function Availability(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDate - Returns a list of available times.
     *
     * Choose your search criteria carefully. Availability is an expensive call. If you search availability for all resources
     * then you should only do so for a single date. If you decide to search availability for multiple dates you should only do so
     * for a specific resource by specifying the optional resourceId parameter.<br /><br />
     *
     * Start and End times are specified as military times e.g. 800 = 8:00am, 2230 = 10:30pm.
     * You will only see availability within the boundary of your business start and end times.<br /><br />
     *
     *
     * dayAvailability will return day availablility for the number of days requested from the start date.<br /><br />
     *
     *
     * firstDayAvailable only works with day availability. If set to true it will look for the first day available within the range specified
     * by the dayAvailability parameter. The two parameters together can be a clever way to display availability for a week or month.
     * Tip - pass in the beginning of the week or month, and available times are displayed for the first available date if exists.<br /><br />
     *
     * You should only specify the duration parameter if you let your customers choose the duration of the appointment. e.g. from a list.<br /><br />
     *
     *
     * The tz parameter allows you to select a suitable timezone for the customer to book in. Your app should be timezone aware if you
     * use this option. The requested timezone is specified as an offset(plus or minus) from GMT time.<br /><br />
     *
     * Availabity can be complex. We provided an endpoint help you troubleshoot:
     * /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable.
     * This endpoint will show you all the blocks for a given date range. Available times are created from any unblocked time periods.<br /><br />
     *
     *
     * See more information at <a href="https://onsched.readme.io/docs/availability-overview">Availability Overview</a>
    **/
    Availability.prototype.getConsumerV1AvailabilityServiceIdStartDateEndDate = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}", req.pathParams);
        var client = this._securityClient;
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
                        res.availabilityViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDateDays - Returns a list of available days.
     *
     * This end point is used to show day level availability. For example if the business is closed, or there is a public holiday.
     *
     * Day level availability is a good way to restrict your choices of dates in your app and improve usability.
    **/
    Availability.prototype.getConsumerV1AvailabilityServiceIdStartDateEndDateDays = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days", req.pathParams);
        var client = this._securityClient;
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
                        res.availabilityDayViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDateTimes - Returns a list of available times.
     *
     * <b>Deprecation Notice</b> : This endpoint is no longer being maintained and will be deprecated in a future release.
     *             Use the /consumer/v1/availability{serviceId}/{startDate}/{endDate} endpoint instead.
    **/
    Availability.prototype.getConsumerV1AvailabilityServiceIdStartDateEndDateTimes = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/times", req.pathParams);
        var client = this._securityClient;
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
                        res.availability3ViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable - Returns a list of unavailable times.
     *
     * This endpoint is used to show unavailable times and provides information why the time is unavailable.
    **/
    Availability.prototype.getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable", req.pathParams);
        var client = this._securityClient;
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
                        res.unavailableTimeListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDateWindows - Returns a list of available booking window times.
     *
     * This end point may be removed in the next release. It is used for server based availability from UnavailableTimes.
     * Use the v1/consumer/availability{serviceId}/{startDate}/{endDate} endpoint instead.
    **/
    Availability.prototype.getConsumerV1AvailabilityServiceIdStartDateEndDateWindows = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/windows", req.pathParams);
        var client = this._securityClient;
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
                        res.windowAvailabilityViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    return Availability;
}());
exports.Availability = Availability;
