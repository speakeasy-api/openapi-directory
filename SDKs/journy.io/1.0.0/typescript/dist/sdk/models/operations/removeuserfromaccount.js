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
exports.RemoveUserFromAccountResponse = exports.RemoveUserFromAccountRequest = exports.RemoveUserFromAccount500ApplicationJson = exports.RemoveUserFromAccount500ApplicationJsonMeta = exports.RemoveUserFromAccount429ApplicationJson = exports.RemoveUserFromAccount429ApplicationJsonMeta = exports.RemoveUserFromAccount403ApplicationJson = exports.RemoveUserFromAccount403ApplicationJsonMeta = exports.RemoveUserFromAccount401ApplicationJson = exports.RemoveUserFromAccount401ApplicationJsonMeta = exports.RemoveUserFromAccount400ApplicationJson = exports.RemoveUserFromAccount400ApplicationJsonMeta = exports.RemoveUserFromAccount400ApplicationJsonErrors = exports.RemoveUserFromAccount400ApplicationJsonErrorsParameters = exports.RemoveUserFromAccount201ApplicationJson = exports.RemoveUserFromAccount201ApplicationJsonMeta = exports.RemoveUserFromAccountRequestBody = exports.RemoveUserFromAccountPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var RemoveUserFromAccountPathParams = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccountPathParams, _super);
    function RemoveUserFromAccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccountPathParams.prototype, "accountId", void 0);
    return RemoveUserFromAccountPathParams;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccountPathParams = RemoveUserFromAccountPathParams;
// RemoveUserFromAccountRequestBody
/**
 * The user being added/removed from the account
**/
var RemoveUserFromAccountRequestBody = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccountRequestBody, _super);
    function RemoveUserFromAccountRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccountRequestBody.prototype, "userId", void 0);
    return RemoveUserFromAccountRequestBody;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccountRequestBody = RemoveUserFromAccountRequestBody;
var RemoveUserFromAccount201ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount201ApplicationJsonMeta, _super);
    function RemoveUserFromAccount201ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount201ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], RemoveUserFromAccount201ApplicationJsonMeta.prototype, "status", void 0);
    return RemoveUserFromAccount201ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccount201ApplicationJsonMeta = RemoveUserFromAccount201ApplicationJsonMeta;
// RemoveUserFromAccount201ApplicationJson
/**
 * The object was created
**/
var RemoveUserFromAccount201ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount201ApplicationJson, _super);
    function RemoveUserFromAccount201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount201ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", RemoveUserFromAccount201ApplicationJsonMeta)
    ], RemoveUserFromAccount201ApplicationJson.prototype, "meta", void 0);
    return RemoveUserFromAccount201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccount201ApplicationJson = RemoveUserFromAccount201ApplicationJson;
// RemoveUserFromAccount400ApplicationJsonErrorsParameters
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
var RemoveUserFromAccount400ApplicationJsonErrorsParameters = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount400ApplicationJsonErrorsParameters, _super);
    function RemoveUserFromAccount400ApplicationJsonErrorsParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=header" }),
        __metadata("design:type", Object)
    ], RemoveUserFromAccount400ApplicationJsonErrorsParameters.prototype, "header", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", Object)
    ], RemoveUserFromAccount400ApplicationJsonErrorsParameters.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query" }),
        __metadata("design:type", Object)
    ], RemoveUserFromAccount400ApplicationJsonErrorsParameters.prototype, "query", void 0);
    return RemoveUserFromAccount400ApplicationJsonErrorsParameters;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccount400ApplicationJsonErrorsParameters = RemoveUserFromAccount400ApplicationJsonErrorsParameters;
// RemoveUserFromAccount400ApplicationJsonErrors
/**
 * Map that sums up all received values that seemed incorrect
**/
var RemoveUserFromAccount400ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount400ApplicationJsonErrors, _super);
    function RemoveUserFromAccount400ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fields" }),
        __metadata("design:type", Object)
    ], RemoveUserFromAccount400ApplicationJsonErrors.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameters" }),
        __metadata("design:type", RemoveUserFromAccount400ApplicationJsonErrorsParameters)
    ], RemoveUserFromAccount400ApplicationJsonErrors.prototype, "parameters", void 0);
    return RemoveUserFromAccount400ApplicationJsonErrors;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccount400ApplicationJsonErrors = RemoveUserFromAccount400ApplicationJsonErrors;
var RemoveUserFromAccount400ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount400ApplicationJsonMeta, _super);
    function RemoveUserFromAccount400ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount400ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], RemoveUserFromAccount400ApplicationJsonMeta.prototype, "status", void 0);
    return RemoveUserFromAccount400ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccount400ApplicationJsonMeta = RemoveUserFromAccount400ApplicationJsonMeta;
// RemoveUserFromAccount400ApplicationJson
/**
 * Specify the fields and/ or parameters that had errors
**/
var RemoveUserFromAccount400ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount400ApplicationJson, _super);
    function RemoveUserFromAccount400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors" }),
        __metadata("design:type", RemoveUserFromAccount400ApplicationJsonErrors)
    ], RemoveUserFromAccount400ApplicationJson.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount400ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", RemoveUserFromAccount400ApplicationJsonMeta)
    ], RemoveUserFromAccount400ApplicationJson.prototype, "meta", void 0);
    return RemoveUserFromAccount400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccount400ApplicationJson = RemoveUserFromAccount400ApplicationJson;
var RemoveUserFromAccount401ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount401ApplicationJsonMeta, _super);
    function RemoveUserFromAccount401ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount401ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], RemoveUserFromAccount401ApplicationJsonMeta.prototype, "status", void 0);
    return RemoveUserFromAccount401ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccount401ApplicationJsonMeta = RemoveUserFromAccount401ApplicationJsonMeta;
// RemoveUserFromAccount401ApplicationJson
/**
 * The error message should specify what cause the error
**/
var RemoveUserFromAccount401ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount401ApplicationJson, _super);
    function RemoveUserFromAccount401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", RemoveUserFromAccount401ApplicationJsonMeta)
    ], RemoveUserFromAccount401ApplicationJson.prototype, "meta", void 0);
    return RemoveUserFromAccount401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccount401ApplicationJson = RemoveUserFromAccount401ApplicationJson;
var RemoveUserFromAccount403ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount403ApplicationJsonMeta, _super);
    function RemoveUserFromAccount403ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount403ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], RemoveUserFromAccount403ApplicationJsonMeta.prototype, "status", void 0);
    return RemoveUserFromAccount403ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccount403ApplicationJsonMeta = RemoveUserFromAccount403ApplicationJsonMeta;
// RemoveUserFromAccount403ApplicationJson
/**
 * The error message should specify what cause the error
**/
var RemoveUserFromAccount403ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount403ApplicationJson, _super);
    function RemoveUserFromAccount403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount403ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", RemoveUserFromAccount403ApplicationJsonMeta)
    ], RemoveUserFromAccount403ApplicationJson.prototype, "meta", void 0);
    return RemoveUserFromAccount403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccount403ApplicationJson = RemoveUserFromAccount403ApplicationJson;
var RemoveUserFromAccount429ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount429ApplicationJsonMeta, _super);
    function RemoveUserFromAccount429ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount429ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], RemoveUserFromAccount429ApplicationJsonMeta.prototype, "status", void 0);
    return RemoveUserFromAccount429ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccount429ApplicationJsonMeta = RemoveUserFromAccount429ApplicationJsonMeta;
// RemoveUserFromAccount429ApplicationJson
/**
 * The error message should specify what cause the error
**/
var RemoveUserFromAccount429ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount429ApplicationJson, _super);
    function RemoveUserFromAccount429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount429ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", RemoveUserFromAccount429ApplicationJsonMeta)
    ], RemoveUserFromAccount429ApplicationJson.prototype, "meta", void 0);
    return RemoveUserFromAccount429ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccount429ApplicationJson = RemoveUserFromAccount429ApplicationJson;
var RemoveUserFromAccount500ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount500ApplicationJsonMeta, _super);
    function RemoveUserFromAccount500ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount500ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], RemoveUserFromAccount500ApplicationJsonMeta.prototype, "status", void 0);
    return RemoveUserFromAccount500ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccount500ApplicationJsonMeta = RemoveUserFromAccount500ApplicationJsonMeta;
// RemoveUserFromAccount500ApplicationJson
/**
 * The error message should specify what cause the error
**/
var RemoveUserFromAccount500ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount500ApplicationJson, _super);
    function RemoveUserFromAccount500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount500ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", RemoveUserFromAccount500ApplicationJsonMeta)
    ], RemoveUserFromAccount500ApplicationJson.prototype, "meta", void 0);
    return RemoveUserFromAccount500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccount500ApplicationJson = RemoveUserFromAccount500ApplicationJson;
var RemoveUserFromAccountRequest = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccountRequest, _super);
    function RemoveUserFromAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveUserFromAccountPathParams)
    ], RemoveUserFromAccountRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveUserFromAccountRequestBody)
    ], RemoveUserFromAccountRequest.prototype, "request", void 0);
    return RemoveUserFromAccountRequest;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccountRequest = RemoveUserFromAccountRequest;
var RemoveUserFromAccountResponse = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccountResponse, _super);
    function RemoveUserFromAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RemoveUserFromAccountResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RemoveUserFromAccountResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RemoveUserFromAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveUserFromAccount201ApplicationJson)
    ], RemoveUserFromAccountResponse.prototype, "removeUserFromAccount201ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveUserFromAccount400ApplicationJson)
    ], RemoveUserFromAccountResponse.prototype, "removeUserFromAccount400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveUserFromAccount401ApplicationJson)
    ], RemoveUserFromAccountResponse.prototype, "removeUserFromAccount401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveUserFromAccount403ApplicationJson)
    ], RemoveUserFromAccountResponse.prototype, "removeUserFromAccount403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveUserFromAccount429ApplicationJson)
    ], RemoveUserFromAccountResponse.prototype, "removeUserFromAccount429ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveUserFromAccount500ApplicationJson)
    ], RemoveUserFromAccountResponse.prototype, "removeUserFromAccount500ApplicationJSONObject", void 0);
    return RemoveUserFromAccountResponse;
}(utils_1.SpeakeasyBase));
exports.RemoveUserFromAccountResponse = RemoveUserFromAccountResponse;
