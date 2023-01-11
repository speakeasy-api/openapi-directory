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
exports.UpsertAccountResponse = exports.UpsertAccountRequest = exports.UpsertAccount500ApplicationJson = exports.UpsertAccount500ApplicationJsonMeta = exports.UpsertAccount429ApplicationJson = exports.UpsertAccount429ApplicationJsonMeta = exports.UpsertAccount401ApplicationJson = exports.UpsertAccount401ApplicationJsonMeta = exports.UpsertAccount400ApplicationJson = exports.UpsertAccount400ApplicationJsonMeta = exports.UpsertAccount400ApplicationJsonErrors = exports.UpsertAccount400ApplicationJsonErrorsParameters = exports.UpsertAccount201ApplicationJson = exports.UpsertAccount201ApplicationJsonMeta = exports.UpsertAccountRequestBody = exports.UpsertAccountRequestBodyMembers = exports.UpsertAccountRequestBodyMembersIdentification = exports.UpsertAccountRequestBodyIdentification = void 0;
var utils_1 = require("../../../internal/utils");
// UpsertAccountRequestBodyIdentification
/**
 * Account identification requires an accountId, domain or both
**/
var UpsertAccountRequestBodyIdentification = /** @class */ (function (_super) {
    __extends(UpsertAccountRequestBodyIdentification, _super);
    function UpsertAccountRequestBodyIdentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], UpsertAccountRequestBodyIdentification.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], UpsertAccountRequestBodyIdentification.prototype, "domain", void 0);
    return UpsertAccountRequestBodyIdentification;
}(utils_1.SpeakeasyBase));
exports.UpsertAccountRequestBodyIdentification = UpsertAccountRequestBodyIdentification;
// UpsertAccountRequestBodyMembersIdentification
/**
 * User identification requires a userId, email or both
**/
var UpsertAccountRequestBodyMembersIdentification = /** @class */ (function (_super) {
    __extends(UpsertAccountRequestBodyMembersIdentification, _super);
    function UpsertAccountRequestBodyMembersIdentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UpsertAccountRequestBodyMembersIdentification.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], UpsertAccountRequestBodyMembersIdentification.prototype, "userId", void 0);
    return UpsertAccountRequestBodyMembersIdentification;
}(utils_1.SpeakeasyBase));
exports.UpsertAccountRequestBodyMembersIdentification = UpsertAccountRequestBodyMembersIdentification;
// UpsertAccountRequestBodyMembers
/**
 * Identification requires an accountId, domain or both
**/
var UpsertAccountRequestBodyMembers = /** @class */ (function (_super) {
    __extends(UpsertAccountRequestBodyMembers, _super);
    function UpsertAccountRequestBodyMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=identification" }),
        __metadata("design:type", UpsertAccountRequestBodyMembersIdentification)
    ], UpsertAccountRequestBodyMembers.prototype, "identification", void 0);
    return UpsertAccountRequestBodyMembers;
}(utils_1.SpeakeasyBase));
exports.UpsertAccountRequestBodyMembers = UpsertAccountRequestBodyMembers;
// UpsertAccountRequestBody
/**
 * Update properties and/or members of an account
**/
var UpsertAccountRequestBody = /** @class */ (function (_super) {
    __extends(UpsertAccountRequestBody, _super);
    function UpsertAccountRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=identification" }),
        __metadata("design:type", UpsertAccountRequestBodyIdentification)
    ], UpsertAccountRequestBody.prototype, "identification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members", elemType: UpsertAccountRequestBodyMembers }),
        __metadata("design:type", Array)
    ], UpsertAccountRequestBody.prototype, "members", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties" }),
        __metadata("design:type", Object)
    ], UpsertAccountRequestBody.prototype, "properties", void 0);
    return UpsertAccountRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpsertAccountRequestBody = UpsertAccountRequestBody;
var UpsertAccount201ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(UpsertAccount201ApplicationJsonMeta, _super);
    function UpsertAccount201ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], UpsertAccount201ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpsertAccount201ApplicationJsonMeta.prototype, "status", void 0);
    return UpsertAccount201ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.UpsertAccount201ApplicationJsonMeta = UpsertAccount201ApplicationJsonMeta;
// UpsertAccount201ApplicationJson
/**
 * The object was created
**/
var UpsertAccount201ApplicationJson = /** @class */ (function (_super) {
    __extends(UpsertAccount201ApplicationJson, _super);
    function UpsertAccount201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpsertAccount201ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", UpsertAccount201ApplicationJsonMeta)
    ], UpsertAccount201ApplicationJson.prototype, "meta", void 0);
    return UpsertAccount201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpsertAccount201ApplicationJson = UpsertAccount201ApplicationJson;
// UpsertAccount400ApplicationJsonErrorsParameters
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
var UpsertAccount400ApplicationJsonErrorsParameters = /** @class */ (function (_super) {
    __extends(UpsertAccount400ApplicationJsonErrorsParameters, _super);
    function UpsertAccount400ApplicationJsonErrorsParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=header" }),
        __metadata("design:type", Object)
    ], UpsertAccount400ApplicationJsonErrorsParameters.prototype, "header", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", Object)
    ], UpsertAccount400ApplicationJsonErrorsParameters.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query" }),
        __metadata("design:type", Object)
    ], UpsertAccount400ApplicationJsonErrorsParameters.prototype, "query", void 0);
    return UpsertAccount400ApplicationJsonErrorsParameters;
}(utils_1.SpeakeasyBase));
exports.UpsertAccount400ApplicationJsonErrorsParameters = UpsertAccount400ApplicationJsonErrorsParameters;
// UpsertAccount400ApplicationJsonErrors
/**
 * Map that sums up all received values that seemed incorrect
**/
var UpsertAccount400ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(UpsertAccount400ApplicationJsonErrors, _super);
    function UpsertAccount400ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fields" }),
        __metadata("design:type", Object)
    ], UpsertAccount400ApplicationJsonErrors.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameters" }),
        __metadata("design:type", UpsertAccount400ApplicationJsonErrorsParameters)
    ], UpsertAccount400ApplicationJsonErrors.prototype, "parameters", void 0);
    return UpsertAccount400ApplicationJsonErrors;
}(utils_1.SpeakeasyBase));
exports.UpsertAccount400ApplicationJsonErrors = UpsertAccount400ApplicationJsonErrors;
var UpsertAccount400ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(UpsertAccount400ApplicationJsonMeta, _super);
    function UpsertAccount400ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], UpsertAccount400ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpsertAccount400ApplicationJsonMeta.prototype, "status", void 0);
    return UpsertAccount400ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.UpsertAccount400ApplicationJsonMeta = UpsertAccount400ApplicationJsonMeta;
// UpsertAccount400ApplicationJson
/**
 * Specify the fields and/ or parameters that had errors
**/
var UpsertAccount400ApplicationJson = /** @class */ (function (_super) {
    __extends(UpsertAccount400ApplicationJson, _super);
    function UpsertAccount400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors" }),
        __metadata("design:type", UpsertAccount400ApplicationJsonErrors)
    ], UpsertAccount400ApplicationJson.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpsertAccount400ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", UpsertAccount400ApplicationJsonMeta)
    ], UpsertAccount400ApplicationJson.prototype, "meta", void 0);
    return UpsertAccount400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpsertAccount400ApplicationJson = UpsertAccount400ApplicationJson;
var UpsertAccount401ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(UpsertAccount401ApplicationJsonMeta, _super);
    function UpsertAccount401ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], UpsertAccount401ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpsertAccount401ApplicationJsonMeta.prototype, "status", void 0);
    return UpsertAccount401ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.UpsertAccount401ApplicationJsonMeta = UpsertAccount401ApplicationJsonMeta;
// UpsertAccount401ApplicationJson
/**
 * The error message should specify what cause the error
**/
var UpsertAccount401ApplicationJson = /** @class */ (function (_super) {
    __extends(UpsertAccount401ApplicationJson, _super);
    function UpsertAccount401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpsertAccount401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", UpsertAccount401ApplicationJsonMeta)
    ], UpsertAccount401ApplicationJson.prototype, "meta", void 0);
    return UpsertAccount401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpsertAccount401ApplicationJson = UpsertAccount401ApplicationJson;
var UpsertAccount429ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(UpsertAccount429ApplicationJsonMeta, _super);
    function UpsertAccount429ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], UpsertAccount429ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpsertAccount429ApplicationJsonMeta.prototype, "status", void 0);
    return UpsertAccount429ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.UpsertAccount429ApplicationJsonMeta = UpsertAccount429ApplicationJsonMeta;
// UpsertAccount429ApplicationJson
/**
 * The error message should specify what cause the error
**/
var UpsertAccount429ApplicationJson = /** @class */ (function (_super) {
    __extends(UpsertAccount429ApplicationJson, _super);
    function UpsertAccount429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpsertAccount429ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", UpsertAccount429ApplicationJsonMeta)
    ], UpsertAccount429ApplicationJson.prototype, "meta", void 0);
    return UpsertAccount429ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpsertAccount429ApplicationJson = UpsertAccount429ApplicationJson;
var UpsertAccount500ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(UpsertAccount500ApplicationJsonMeta, _super);
    function UpsertAccount500ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], UpsertAccount500ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpsertAccount500ApplicationJsonMeta.prototype, "status", void 0);
    return UpsertAccount500ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.UpsertAccount500ApplicationJsonMeta = UpsertAccount500ApplicationJsonMeta;
// UpsertAccount500ApplicationJson
/**
 * The error message should specify what cause the error
**/
var UpsertAccount500ApplicationJson = /** @class */ (function (_super) {
    __extends(UpsertAccount500ApplicationJson, _super);
    function UpsertAccount500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpsertAccount500ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", UpsertAccount500ApplicationJsonMeta)
    ], UpsertAccount500ApplicationJson.prototype, "meta", void 0);
    return UpsertAccount500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpsertAccount500ApplicationJson = UpsertAccount500ApplicationJson;
var UpsertAccountRequest = /** @class */ (function (_super) {
    __extends(UpsertAccountRequest, _super);
    function UpsertAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpsertAccountRequestBody)
    ], UpsertAccountRequest.prototype, "request", void 0);
    return UpsertAccountRequest;
}(utils_1.SpeakeasyBase));
exports.UpsertAccountRequest = UpsertAccountRequest;
var UpsertAccountResponse = /** @class */ (function (_super) {
    __extends(UpsertAccountResponse, _super);
    function UpsertAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpsertAccountResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpsertAccountResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpsertAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpsertAccount201ApplicationJson)
    ], UpsertAccountResponse.prototype, "upsertAccount201ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpsertAccount400ApplicationJson)
    ], UpsertAccountResponse.prototype, "upsertAccount400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpsertAccount401ApplicationJson)
    ], UpsertAccountResponse.prototype, "upsertAccount401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpsertAccount429ApplicationJson)
    ], UpsertAccountResponse.prototype, "upsertAccount429ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpsertAccount500ApplicationJson)
    ], UpsertAccountResponse.prototype, "upsertAccount500ApplicationJSONObject", void 0);
    return UpsertAccountResponse;
}(utils_1.SpeakeasyBase));
exports.UpsertAccountResponse = UpsertAccountResponse;
