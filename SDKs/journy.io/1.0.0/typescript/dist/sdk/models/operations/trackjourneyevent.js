"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackJourneyEventResponse = exports.TrackJourneyEventRequest = exports.TrackJourneyEvent500ApplicationJson = exports.TrackJourneyEvent500ApplicationJsonMeta = exports.TrackJourneyEvent429ApplicationJson = exports.TrackJourneyEvent429ApplicationJsonMeta = exports.TrackJourneyEvent403ApplicationJson = exports.TrackJourneyEvent403ApplicationJsonMeta = exports.TrackJourneyEvent401ApplicationJson = exports.TrackJourneyEvent401ApplicationJsonMeta = exports.TrackJourneyEvent400ApplicationJson = exports.TrackJourneyEvent400ApplicationJsonMeta = exports.TrackJourneyEvent400ApplicationJsonErrors = exports.TrackJourneyEvent400ApplicationJsonErrorsParameters = exports.TrackJourneyEvent201ApplicationJson = exports.TrackJourneyEvent201ApplicationJsonMeta = exports.TrackJourneyEventRequestBody = exports.TrackJourneyEventRequestBodyIdentification = exports.TrackJourneyEventRequestBodyIdentificationUser = exports.TrackJourneyEventRequestBodyIdentificationAccount = void 0;
var utils_1 = require("../../../internal/utils");
// TrackJourneyEventRequestBodyIdentificationAccount
/**
 * Account identification requires an accountId, domain or both
**/
var TrackJourneyEventRequestBodyIdentificationAccount = /** @class */ (function (_super) {
    __extends(TrackJourneyEventRequestBodyIdentificationAccount, _super);
    function TrackJourneyEventRequestBodyIdentificationAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], TrackJourneyEventRequestBodyIdentificationAccount.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], TrackJourneyEventRequestBodyIdentificationAccount.prototype, "domain", void 0);
    return TrackJourneyEventRequestBodyIdentificationAccount;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEventRequestBodyIdentificationAccount = TrackJourneyEventRequestBodyIdentificationAccount;
// TrackJourneyEventRequestBodyIdentificationUser
/**
 * User identification requires a userId, email or both
**/
var TrackJourneyEventRequestBodyIdentificationUser = /** @class */ (function (_super) {
    __extends(TrackJourneyEventRequestBodyIdentificationUser, _super);
    function TrackJourneyEventRequestBodyIdentificationUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], TrackJourneyEventRequestBodyIdentificationUser.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], TrackJourneyEventRequestBodyIdentificationUser.prototype, "userId", void 0);
    return TrackJourneyEventRequestBodyIdentificationUser;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEventRequestBodyIdentificationUser = TrackJourneyEventRequestBodyIdentificationUser;
// TrackJourneyEventRequestBodyIdentification
/**
 * Event identification requires a user, account or both
**/
var TrackJourneyEventRequestBodyIdentification = /** @class */ (function (_super) {
    __extends(TrackJourneyEventRequestBodyIdentification, _super);
    function TrackJourneyEventRequestBodyIdentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account" }),
        __metadata("design:type", TrackJourneyEventRequestBodyIdentificationAccount)
    ], TrackJourneyEventRequestBodyIdentification.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", TrackJourneyEventRequestBodyIdentificationUser)
    ], TrackJourneyEventRequestBodyIdentification.prototype, "user", void 0);
    return TrackJourneyEventRequestBodyIdentification;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEventRequestBodyIdentification = TrackJourneyEventRequestBodyIdentification;
// TrackJourneyEventRequestBody
/**
 * Event for a user or an account
**/
var TrackJourneyEventRequestBody = /** @class */ (function (_super) {
    __extends(TrackJourneyEventRequestBody, _super);
    function TrackJourneyEventRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=identification" }),
        __metadata("design:type", TrackJourneyEventRequestBodyIdentification)
    ], TrackJourneyEventRequestBody.prototype, "identification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", Object)
    ], TrackJourneyEventRequestBody.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TrackJourneyEventRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=triggeredAt" }),
        __metadata("design:type", String)
    ], TrackJourneyEventRequestBody.prototype, "triggeredAt", void 0);
    return TrackJourneyEventRequestBody;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEventRequestBody = TrackJourneyEventRequestBody;
var TrackJourneyEvent201ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(TrackJourneyEvent201ApplicationJsonMeta, _super);
    function TrackJourneyEvent201ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], TrackJourneyEvent201ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], TrackJourneyEvent201ApplicationJsonMeta.prototype, "status", void 0);
    return TrackJourneyEvent201ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEvent201ApplicationJsonMeta = TrackJourneyEvent201ApplicationJsonMeta;
// TrackJourneyEvent201ApplicationJson
/**
 * The object was created
**/
var TrackJourneyEvent201ApplicationJson = /** @class */ (function (_super) {
    __extends(TrackJourneyEvent201ApplicationJson, _super);
    function TrackJourneyEvent201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], TrackJourneyEvent201ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", TrackJourneyEvent201ApplicationJsonMeta)
    ], TrackJourneyEvent201ApplicationJson.prototype, "meta", void 0);
    return TrackJourneyEvent201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEvent201ApplicationJson = TrackJourneyEvent201ApplicationJson;
// TrackJourneyEvent400ApplicationJsonErrorsParameters
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
var TrackJourneyEvent400ApplicationJsonErrorsParameters = /** @class */ (function (_super) {
    __extends(TrackJourneyEvent400ApplicationJsonErrorsParameters, _super);
    function TrackJourneyEvent400ApplicationJsonErrorsParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=header" }),
        __metadata("design:type", Object)
    ], TrackJourneyEvent400ApplicationJsonErrorsParameters.prototype, "header", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", Object)
    ], TrackJourneyEvent400ApplicationJsonErrorsParameters.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query" }),
        __metadata("design:type", Object)
    ], TrackJourneyEvent400ApplicationJsonErrorsParameters.prototype, "query", void 0);
    return TrackJourneyEvent400ApplicationJsonErrorsParameters;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEvent400ApplicationJsonErrorsParameters = TrackJourneyEvent400ApplicationJsonErrorsParameters;
// TrackJourneyEvent400ApplicationJsonErrors
/**
 * Map that sums up all received values that seemed incorrect
**/
var TrackJourneyEvent400ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(TrackJourneyEvent400ApplicationJsonErrors, _super);
    function TrackJourneyEvent400ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fields" }),
        __metadata("design:type", Object)
    ], TrackJourneyEvent400ApplicationJsonErrors.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameters" }),
        __metadata("design:type", TrackJourneyEvent400ApplicationJsonErrorsParameters)
    ], TrackJourneyEvent400ApplicationJsonErrors.prototype, "parameters", void 0);
    return TrackJourneyEvent400ApplicationJsonErrors;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEvent400ApplicationJsonErrors = TrackJourneyEvent400ApplicationJsonErrors;
var TrackJourneyEvent400ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(TrackJourneyEvent400ApplicationJsonMeta, _super);
    function TrackJourneyEvent400ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], TrackJourneyEvent400ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], TrackJourneyEvent400ApplicationJsonMeta.prototype, "status", void 0);
    return TrackJourneyEvent400ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEvent400ApplicationJsonMeta = TrackJourneyEvent400ApplicationJsonMeta;
// TrackJourneyEvent400ApplicationJson
/**
 * Specify the fields and/ or parameters that had errors
**/
var TrackJourneyEvent400ApplicationJson = /** @class */ (function (_super) {
    __extends(TrackJourneyEvent400ApplicationJson, _super);
    function TrackJourneyEvent400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors" }),
        __metadata("design:type", TrackJourneyEvent400ApplicationJsonErrors)
    ], TrackJourneyEvent400ApplicationJson.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], TrackJourneyEvent400ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", TrackJourneyEvent400ApplicationJsonMeta)
    ], TrackJourneyEvent400ApplicationJson.prototype, "meta", void 0);
    return TrackJourneyEvent400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEvent400ApplicationJson = TrackJourneyEvent400ApplicationJson;
var TrackJourneyEvent401ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(TrackJourneyEvent401ApplicationJsonMeta, _super);
    function TrackJourneyEvent401ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], TrackJourneyEvent401ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], TrackJourneyEvent401ApplicationJsonMeta.prototype, "status", void 0);
    return TrackJourneyEvent401ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEvent401ApplicationJsonMeta = TrackJourneyEvent401ApplicationJsonMeta;
// TrackJourneyEvent401ApplicationJson
/**
 * The error message should specify what cause the error
**/
var TrackJourneyEvent401ApplicationJson = /** @class */ (function (_super) {
    __extends(TrackJourneyEvent401ApplicationJson, _super);
    function TrackJourneyEvent401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], TrackJourneyEvent401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", TrackJourneyEvent401ApplicationJsonMeta)
    ], TrackJourneyEvent401ApplicationJson.prototype, "meta", void 0);
    return TrackJourneyEvent401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEvent401ApplicationJson = TrackJourneyEvent401ApplicationJson;
var TrackJourneyEvent403ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(TrackJourneyEvent403ApplicationJsonMeta, _super);
    function TrackJourneyEvent403ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], TrackJourneyEvent403ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], TrackJourneyEvent403ApplicationJsonMeta.prototype, "status", void 0);
    return TrackJourneyEvent403ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEvent403ApplicationJsonMeta = TrackJourneyEvent403ApplicationJsonMeta;
// TrackJourneyEvent403ApplicationJson
/**
 * The error message should specify what cause the error
**/
var TrackJourneyEvent403ApplicationJson = /** @class */ (function (_super) {
    __extends(TrackJourneyEvent403ApplicationJson, _super);
    function TrackJourneyEvent403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], TrackJourneyEvent403ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", TrackJourneyEvent403ApplicationJsonMeta)
    ], TrackJourneyEvent403ApplicationJson.prototype, "meta", void 0);
    return TrackJourneyEvent403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEvent403ApplicationJson = TrackJourneyEvent403ApplicationJson;
var TrackJourneyEvent429ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(TrackJourneyEvent429ApplicationJsonMeta, _super);
    function TrackJourneyEvent429ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], TrackJourneyEvent429ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], TrackJourneyEvent429ApplicationJsonMeta.prototype, "status", void 0);
    return TrackJourneyEvent429ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEvent429ApplicationJsonMeta = TrackJourneyEvent429ApplicationJsonMeta;
// TrackJourneyEvent429ApplicationJson
/**
 * The error message should specify what cause the error
**/
var TrackJourneyEvent429ApplicationJson = /** @class */ (function (_super) {
    __extends(TrackJourneyEvent429ApplicationJson, _super);
    function TrackJourneyEvent429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], TrackJourneyEvent429ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", TrackJourneyEvent429ApplicationJsonMeta)
    ], TrackJourneyEvent429ApplicationJson.prototype, "meta", void 0);
    return TrackJourneyEvent429ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEvent429ApplicationJson = TrackJourneyEvent429ApplicationJson;
var TrackJourneyEvent500ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(TrackJourneyEvent500ApplicationJsonMeta, _super);
    function TrackJourneyEvent500ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], TrackJourneyEvent500ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], TrackJourneyEvent500ApplicationJsonMeta.prototype, "status", void 0);
    return TrackJourneyEvent500ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEvent500ApplicationJsonMeta = TrackJourneyEvent500ApplicationJsonMeta;
// TrackJourneyEvent500ApplicationJson
/**
 * The error message should specify what cause the error
**/
var TrackJourneyEvent500ApplicationJson = /** @class */ (function (_super) {
    __extends(TrackJourneyEvent500ApplicationJson, _super);
    function TrackJourneyEvent500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], TrackJourneyEvent500ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", TrackJourneyEvent500ApplicationJsonMeta)
    ], TrackJourneyEvent500ApplicationJson.prototype, "meta", void 0);
    return TrackJourneyEvent500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEvent500ApplicationJson = TrackJourneyEvent500ApplicationJson;
var TrackJourneyEventRequest = /** @class */ (function (_super) {
    __extends(TrackJourneyEventRequest, _super);
    function TrackJourneyEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", TrackJourneyEventRequestBody)
    ], TrackJourneyEventRequest.prototype, "request", void 0);
    return TrackJourneyEventRequest;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEventRequest = TrackJourneyEventRequest;
var TrackJourneyEventResponse = /** @class */ (function (_super) {
    __extends(TrackJourneyEventResponse, _super);
    function TrackJourneyEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TrackJourneyEventResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], TrackJourneyEventResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TrackJourneyEventResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TrackJourneyEvent201ApplicationJson)
    ], TrackJourneyEventResponse.prototype, "trackJourneyEvent201ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TrackJourneyEvent400ApplicationJson)
    ], TrackJourneyEventResponse.prototype, "trackJourneyEvent400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TrackJourneyEvent401ApplicationJson)
    ], TrackJourneyEventResponse.prototype, "trackJourneyEvent401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TrackJourneyEvent403ApplicationJson)
    ], TrackJourneyEventResponse.prototype, "trackJourneyEvent403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TrackJourneyEvent429ApplicationJson)
    ], TrackJourneyEventResponse.prototype, "trackJourneyEvent429ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TrackJourneyEvent500ApplicationJson)
    ], TrackJourneyEventResponse.prototype, "trackJourneyEvent500ApplicationJSONObject", void 0);
    return TrackJourneyEventResponse;
}(utils_1.SpeakeasyBase));
exports.TrackJourneyEventResponse = TrackJourneyEventResponse;
