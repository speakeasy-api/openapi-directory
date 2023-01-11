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
exports.Appointments = void 0;
var operations = __importStar(require("./models/operations"));
var utils = __importStar(require("../internal/utils"));
var Appointments = /** @class */ (function () {
    function Appointments(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * deleteConsumerV1AppointmentsId - Returns an appointment object
     *
     * This end point deletes a booking. Only appointments in a "IN" initial status can be deleted.
     * Past dated appointments cannot be cancelled.<br /><br />
     *
     * A valid appointment id is required. You can use the appointmentId returned from GET /consumer/v1/appointments. <br /><br />
     * For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
    **/
    Appointments.prototype.deleteConsumerV1AppointmentsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteConsumerV1AppointmentsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/consumer/v1/appointments/{id}", req.pathParams);
        var client = this._securityClient;
        var r = client.request(__assign({ url: url, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.appointmentViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getConsumerV1Appointments - Returns a list of appointments.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.<br /><br />
     * Use the other query parameters to optionally filter the list by using the query parameters. <br /><br />
     * This endpoint returns appoinments using paging. <br /><br />
     * See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a>
    **/
    Appointments.prototype.getConsumerV1Appointments = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AppointmentsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/appointments";
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
                        res.appointmentListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getConsumerV1AppointmentsBookingfields - Returns a list of appointment booking fields
     *
     * This end point returns Booking Field definitions.<br></br>
     *
     * Appointment booking fields are different than Customer booking fields. Appointment booking fields are
     * stored with each appointment. They are used when the information collected during the booking is specific
     * to a particular visit.<br></br>
     *
     * Use the field, and type to determine how to update field values
     * in PUT /consumer/v1/appointments/bookingfields.<br></br>
     *
     * Booking Fields include any custom appointment fields you wish to capture with the Booking and also
     * miscellaneous appointment attributes including address information.<br></br>
     * For more information see <a href="https://onsched.readme.io/docs/custom-booking-fields">Appointment booking fields</a>
    **/
    Appointments.prototype.getConsumerV1AppointmentsBookingfields = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AppointmentsBookingfieldsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/appointments/bookingfields";
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
                        res.bookingFieldListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getConsumerV1AppointmentsCustomfields - Returns a list of appointment custom field definitions
     *
     * This end point returns your Appointment custom field definitions.<br /><br />
     *
     * Appointment custom fields are different than Customer custom fields. Appointment custom fields are
     * stored with each appointment. They are used when the information collected during the booking is specific
     * to a particular visit.<br /><br />
     *
     * Use the field, and type to determine how to update field values
     * in PUT /consumer/v1/appointments/customfields <br /><br />
     * For more information see <a href="https://onsched.readme.io/docs/custom-booking-fields">Appointment booking fields</a>
    **/
    Appointments.prototype.getConsumerV1AppointmentsCustomfields = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AppointmentsCustomfieldsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/appointments/customfields";
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
                        res.customFieldDefinitionListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getConsumerV1AppointmentsId - Returns an appointment object.
     *
     * The result returned is a single appointment object. A valid id is required to find the appointment. <br /><br />
     *
     * See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a>
    **/
    Appointments.prototype.getConsumerV1AppointmentsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AppointmentsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/consumer/v1/appointments/{id}", req.pathParams);
        var client = this._securityClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.appointmentViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * postConsumerV1Appointments - Returns an appointment object
     *
     * <p>This end point creates a new appointment in an Initial "IN" status. The exception is if completeBooking parameter set.</p>
     * <br />
     * <p>If you supply a valid customerId in the body, then the POST will create either a booking or reservation using the customer data.</p>
     * <br />
     * <p> A valid serviceId is required. Use GET consumer/v1/services to retrieve a list of your services.</p>
     * <br />
     * <p> A valid resourceId is required if your calendar is a resource based calendar and you are booking single resource appointments. </p>
     * <br />
     * <p> Use consumer/v1/resources to retrieve a list of your resources or use a resourceId returned from the /availability endpoints. </p>
     * <br />
     * <p> The resourceIds parameter is required for multi-resource appointments. Pass in comma separated valid resourceIds. This is beta until we update the notifications.</p>
     * <br />
     * <p> The customerIds parameter is required for multi-customer appointments. Pass in comma separated valid customerIds. This is beta until we update the notifications.</p>
     * <br />
     * <p> The locationId is optional. If the locationId is not passed, the system will default to the primary company location. </p>
     * <br />
     * <p> ServiceId provided must be valid for the location being searched. A valid serviceId is one that is scoped to
     *              Primary Company Location or is associated with that business LocationId</p>
     * <br />
     * <p> The customerId is optional. If supplied you can use the completeBooking option and skip the PUT /book step. </p>
     * <br />
     * <p> The completeBooking option provides a mechanism for immediate booking with a POST. Applies if you have enough customer information
     *              to complete the booking. Either supply email and name or customerId with required information.
     *              Normally, completeBooking is for the BK or RS status, however IN is included to support payment flows.</p>
     * <br />
     * <p> The email, name and phone fields are only used with the completeBooking option. As with customerId you can
     *              skip the PUT /book step. This endpoint completes the booking, and sends notifications.</p>
     * <br />
     * <p> A bookingWindowId is required if you are booking appointments into a defined booking window on the service.</p>
     * <br />
     * <p> BookedBy is an optional parameter. If it is not supplied the email address of the booked appointment is used or the ip address if no email address is
     *              used in the /appointment/book endpoint. Booked by is used in the Appointment Audit trail which can be viewed in the Admin Portal.</p>
     * <br />
     * <p> Location is optional. This is a string representing the location of the actual appointment, not to be confused with a Business Location.</p>
     * <br />
     * <p>Timezone name is optional. The Timezone name is in Iana format e.g. America/New_York. This is the timezone where the appointment was booked. Populating
     *              this information can help later in situations where appointments are booked before a Daylight Savings change.</p>
     * <br />
     * <p>StartDateTime and EndDateTime are required. Use the ISO 8601 format for DateTime Timezone. e.g. 2016-10-30T09:00:00-5:00</p>
     * <br />
     * <p>TravelTimeMins and TravelAppointmentId are optional. These are important if you factor in Travel Time for resources to move between appointments.</p>
     * <br />
     * <p>This information is returned from the availability/times endpoint. <br /><br />
     *              See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>
     * <br />
    **/
    Appointments.prototype.postConsumerV1Appointments = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostConsumerV1AppointmentsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/appointments";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.appointmentInitialViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * putConsumerV1AppointmentsIdBook - Returns an appointment object
     *
     * This end point completes a new booking. Only appointments in the "IN" initial status can be booked.
     * by saving all the relevant details of the booking. <br /><br />
     *
     * A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments.  <br /><br />
     *
     * To update appointment custom field values, use the GET /consumer/v1/appointments/customfields information.  <br /><br />
     * to understand your definitions of custom fields and what key and values to update. <br /><br />
     * See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a> and
     * <a href="https://onsched.readme.io/docs/custom-booking-fields">Custom Booking Fields</a>
    **/
    Appointments.prototype.putConsumerV1AppointmentsIdBook = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutConsumerV1AppointmentsIdBookRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/consumer/v1/appointments/{id}/book", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "put", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.appointmentViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * putConsumerV1AppointmentsIdCancel - Returns an appointment object
     *
     * This end point cancels a booking or reservation. Only appointments in a "BK" booked, or "RS" reserved status can be cancelled.
     * Past dated appointments cannot be cancelled. <br /><br />
     *
     * A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments. <br /><br />
     * For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
    **/
    Appointments.prototype.putConsumerV1AppointmentsIdCancel = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutConsumerV1AppointmentsIdCancelRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/consumer/v1/appointments/{id}/cancel", req.pathParams);
        var client = this._securityClient;
        var r = client.request(__assign({ url: url, method: "put" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.appointmentViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * putConsumerV1AppointmentsIdConfirm - Set the Appointment Confirm property to true or false
    **/
    Appointments.prototype.putConsumerV1AppointmentsIdConfirm = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutConsumerV1AppointmentsIdConfirmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/consumer/v1/appointments/{id}/confirm", req.pathParams);
        var client = this._securityClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "put" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    /**
     * putConsumerV1AppointmentsIdNoshow - For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
    **/
    Appointments.prototype.putConsumerV1AppointmentsIdNoshow = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutConsumerV1AppointmentsIdNoshowRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/consumer/v1/appointments/{id}/noshow", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "put", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    /**
     * putConsumerV1AppointmentsIdReschedule - Returns an appointment object
     *
     * This end point reschedules a booking. Only appointments in a "BK" booked status can be rescheduled.
     * Past dated appointments cannot be cancelled.<br /><br />
     *
     * A valid appointment id is required. Use the appointmentId returned from GET /consumer/v1/appointments.<br /><br />
     *
     * StartDateTime and EndDateTime are required. Use the ISO 8601 format for DateTime Timezone. e.g. 2016-10-30T09:00:00-5:00<br /><br />
     *
     * The serviceId is optional. If you want your users to change the service on a reschedule, include the new serviceId.
     * The new serviceId's StartDateTime and EndDateTime must match your service's duration.<br /><br />
     *
     * Use the GET /consumer/v1/availability/{id}/reschedule endpoint to display a list of available times
     * for the end user to choose from to reschedule the original appointment.<br /><br />
     *
     * You cannot reschedule an appointment to a different location. You can cancel and reschedule to a different location.
     *
     * For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
    **/
    Appointments.prototype.putConsumerV1AppointmentsIdReschedule = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutConsumerV1AppointmentsIdRescheduleRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/consumer/v1/appointments/{id}/reschedule", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "put", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.appointmentViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * putConsumerV1AppointmentsIdReserve - Returns an appointment object
     *
     * This end point completes a new reservation. Only appointments in the "IN" initial status can be booked.
     * by saving all the relevant details of the booking.<br /><br />
     *
     * NOTE - appointment reservations are different than appointment bookings. Reservations are a two step booking process.
     * An appointment is reserved but may not be completed as a booking until other business conditions have been met. For example
     * an appointment may be reserved that is not yet assigned to a resource.<br /><br />
     *
     * NOTE 2 - this endpoint is new as of April 21, 2019. OnSched will be adding a new Email template for appointment reservations expected by the end of April.
     * This will allow you to notify your customer of a reservation versus a booking and customize if required to indicate what conditions will the reservation
     * become a booking.<br /><br />
     *
     * A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments.<br /><br />
     *
     * To update appointment custom field values, use the GET /consumer/v1/appointments/customfields information.
     * to understand your definitions of custom fields and what key and values to update. <br /><br />
     * See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a><br /><br />
    **/
    Appointments.prototype.putConsumerV1AppointmentsIdReserve = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutConsumerV1AppointmentsIdReserveRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/consumer/v1/appointments/{id}/reserve", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "put", headers: headers, data: reqBody }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    return Appointments;
}());
exports.Appointments = Appointments;
