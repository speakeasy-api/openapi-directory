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
exports.DeleteTemplateResponse = exports.DeleteTemplateRequest = exports.DeleteTemplate500ApplicationJson = exports.DeleteTemplate422ApplicationJson = exports.DeleteTemplate422ApplicationJsonErrorEnum = exports.DeleteTemplate404ApplicationJson = exports.DeleteTemplate404ApplicationJsonErrorEnum = exports.DeleteTemplate403ApplicationJson = exports.DeleteTemplate403ApplicationJsonErrorEnum = exports.DeleteTemplate401ApplicationJson = exports.DeleteTemplate401ApplicationJsonErrorEnum = exports.DeleteTemplate200ApplicationJson = exports.DeleteTemplate200ApplicationJsonResponse = exports.DeleteTemplateQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteTemplateQueryParams = /** @class */ (function (_super) {
    __extends(DeleteTemplateQueryParams, _super);
    function DeleteTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=templateId" }),
        __metadata("design:type", Number)
    ], DeleteTemplateQueryParams.prototype, "templateId", void 0);
    return DeleteTemplateQueryParams;
}(utils_1.SpeakeasyBase));
exports.DeleteTemplateQueryParams = DeleteTemplateQueryParams;
var DeleteTemplate200ApplicationJsonResponse = /** @class */ (function (_super) {
    __extends(DeleteTemplate200ApplicationJsonResponse, _super);
    function DeleteTemplate200ApplicationJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], DeleteTemplate200ApplicationJsonResponse.prototype, "success", void 0);
    return DeleteTemplate200ApplicationJsonResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteTemplate200ApplicationJsonResponse = DeleteTemplate200ApplicationJsonResponse;
var DeleteTemplate200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTemplate200ApplicationJson, _super);
    function DeleteTemplate200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response" }),
        __metadata("design:type", DeleteTemplate200ApplicationJsonResponse)
    ], DeleteTemplate200ApplicationJson.prototype, "response", void 0);
    return DeleteTemplate200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTemplate200ApplicationJson = DeleteTemplate200ApplicationJson;
var DeleteTemplate401ApplicationJsonErrorEnum;
(function (DeleteTemplate401ApplicationJsonErrorEnum) {
    DeleteTemplate401ApplicationJsonErrorEnum["AuthenticationFailedRequestExpired"] = "Authentication failed: request expired";
    DeleteTemplate401ApplicationJsonErrorEnum["AuthenticationFailedSignatureOrSecretMissing"] = "Authentication failed: signature or secret missing";
    DeleteTemplate401ApplicationJsonErrorEnum["AuthenticationFailedWorkspaceMissing"] = "Authentication failed: workspace missing";
    DeleteTemplate401ApplicationJsonErrorEnum["AuthenticationFailedKeyMissing"] = "Authentication failed: key missing";
    DeleteTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyIssIssuerMissingInJwt"] = "Authentication failed: property 'iss' (issuer) missing in JWT";
    DeleteTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertySubSubjectMissingInJwt"] = "Authentication failed: property 'sub' (subject) missing in JWT";
    DeleteTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyExpExpirationTimeMissingInJwt"] = "Authentication failed: property 'exp' (expiration time) missing in JWT";
    DeleteTemplate401ApplicationJsonErrorEnum["AuthenticationFailedInvalidIssIssuer"] = "Authentication failed: invalid 'iss' (issuer)";
    DeleteTemplate401ApplicationJsonErrorEnum["AuthenticationFailedIncorrectSignature"] = "Authentication failed: incorrect signature";
    DeleteTemplate401ApplicationJsonErrorEnum["AuthenticationFailed"] = "Authentication failed";
})(DeleteTemplate401ApplicationJsonErrorEnum = exports.DeleteTemplate401ApplicationJsonErrorEnum || (exports.DeleteTemplate401ApplicationJsonErrorEnum = {}));
var DeleteTemplate401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTemplate401ApplicationJson, _super);
    function DeleteTemplate401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], DeleteTemplate401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], DeleteTemplate401ApplicationJson.prototype, "status", void 0);
    return DeleteTemplate401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTemplate401ApplicationJson = DeleteTemplate401ApplicationJson;
var DeleteTemplate403ApplicationJsonErrorEnum;
(function (DeleteTemplate403ApplicationJsonErrorEnum) {
    DeleteTemplate403ApplicationJsonErrorEnum["YourAccountHasExceededTheMonthlyDocumentGenerationLimit"] = "Your account has exceeded the monthly document generation limit.";
})(DeleteTemplate403ApplicationJsonErrorEnum = exports.DeleteTemplate403ApplicationJsonErrorEnum || (exports.DeleteTemplate403ApplicationJsonErrorEnum = {}));
var DeleteTemplate403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTemplate403ApplicationJson, _super);
    function DeleteTemplate403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], DeleteTemplate403ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], DeleteTemplate403ApplicationJson.prototype, "status", void 0);
    return DeleteTemplate403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTemplate403ApplicationJson = DeleteTemplate403ApplicationJson;
var DeleteTemplate404ApplicationJsonErrorEnum;
(function (DeleteTemplate404ApplicationJsonErrorEnum) {
    DeleteTemplate404ApplicationJsonErrorEnum["EntityNotFound"] = "Entity not found";
    DeleteTemplate404ApplicationJsonErrorEnum["ResourceNotFound"] = "Resource not found";
    DeleteTemplate404ApplicationJsonErrorEnum["NoneOfTheTemplatesIsAvailableForTheWorkspace"] = "None of the templates is available for the workspace.";
})(DeleteTemplate404ApplicationJsonErrorEnum = exports.DeleteTemplate404ApplicationJsonErrorEnum || (exports.DeleteTemplate404ApplicationJsonErrorEnum = {}));
var DeleteTemplate404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTemplate404ApplicationJson, _super);
    function DeleteTemplate404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], DeleteTemplate404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], DeleteTemplate404ApplicationJson.prototype, "status", void 0);
    return DeleteTemplate404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTemplate404ApplicationJson = DeleteTemplate404ApplicationJson;
var DeleteTemplate422ApplicationJsonErrorEnum;
(function (DeleteTemplate422ApplicationJsonErrorEnum) {
    DeleteTemplate422ApplicationJsonErrorEnum["UnableToParseJsonPleaseCheckFormatting"] = "Unable to parse JSON, please check formatting";
    DeleteTemplate422ApplicationJsonErrorEnum["RequiredParameterMissing"] = "Required parameter missing";
    DeleteTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateDefinitionNotDefined"] = "Required parameter missing: template definition not defined";
    DeleteTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateNotDefined"] = "Required parameter missing: template not defined";
})(DeleteTemplate422ApplicationJsonErrorEnum = exports.DeleteTemplate422ApplicationJsonErrorEnum || (exports.DeleteTemplate422ApplicationJsonErrorEnum = {}));
var DeleteTemplate422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTemplate422ApplicationJson, _super);
    function DeleteTemplate422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], DeleteTemplate422ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], DeleteTemplate422ApplicationJson.prototype, "status", void 0);
    return DeleteTemplate422ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTemplate422ApplicationJson = DeleteTemplate422ApplicationJson;
var DeleteTemplate500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteTemplate500ApplicationJson, _super);
    function DeleteTemplate500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], DeleteTemplate500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], DeleteTemplate500ApplicationJson.prototype, "status", void 0);
    return DeleteTemplate500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteTemplate500ApplicationJson = DeleteTemplate500ApplicationJson;
var DeleteTemplateRequest = /** @class */ (function (_super) {
    __extends(DeleteTemplateRequest, _super);
    function DeleteTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTemplateQueryParams)
    ], DeleteTemplateRequest.prototype, "queryParams", void 0);
    return DeleteTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteTemplateRequest = DeleteTemplateRequest;
var DeleteTemplateResponse = /** @class */ (function (_super) {
    __extends(DeleteTemplateResponse, _super);
    function DeleteTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTemplate200ApplicationJson)
    ], DeleteTemplateResponse.prototype, "deleteTemplate200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTemplate401ApplicationJson)
    ], DeleteTemplateResponse.prototype, "deleteTemplate401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTemplate403ApplicationJson)
    ], DeleteTemplateResponse.prototype, "deleteTemplate403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTemplate404ApplicationJson)
    ], DeleteTemplateResponse.prototype, "deleteTemplate404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTemplate422ApplicationJson)
    ], DeleteTemplateResponse.prototype, "deleteTemplate422ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTemplate500ApplicationJson)
    ], DeleteTemplateResponse.prototype, "deleteTemplate500ApplicationJSONObject", void 0);
    return DeleteTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteTemplateResponse = DeleteTemplateResponse;
