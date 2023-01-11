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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTemplateResponse = exports.UpdateTemplateRequest = exports.UpdateTemplate500ApplicationJson = exports.UpdateTemplate422ApplicationJson = exports.UpdateTemplate422ApplicationJsonErrorEnum = exports.UpdateTemplate404ApplicationJson = exports.UpdateTemplate404ApplicationJsonErrorEnum = exports.UpdateTemplate403ApplicationJson = exports.UpdateTemplate403ApplicationJsonErrorEnum = exports.UpdateTemplate401ApplicationJson = exports.UpdateTemplate401ApplicationJsonErrorEnum = exports.UpdateTemplate200ApplicationJson = exports.UpdateTemplateQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateTemplateQueryParams = /** @class */ (function (_super) {
    __extends(UpdateTemplateQueryParams, _super);
    function UpdateTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=templateId" }),
        __metadata("design:type", Number)
    ], UpdateTemplateQueryParams.prototype, "templateId", void 0);
    return UpdateTemplateQueryParams;
}(utils_1.SpeakeasyBase));
exports.UpdateTemplateQueryParams = UpdateTemplateQueryParams;
var UpdateTemplate200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateTemplate200ApplicationJson, _super);
    function UpdateTemplate200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response" }),
        __metadata("design:type", shared.TemplateDefinition)
    ], UpdateTemplate200ApplicationJson.prototype, "response", void 0);
    return UpdateTemplate200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateTemplate200ApplicationJson = UpdateTemplate200ApplicationJson;
var UpdateTemplate401ApplicationJsonErrorEnum;
(function (UpdateTemplate401ApplicationJsonErrorEnum) {
    UpdateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedRequestExpired"] = "Authentication failed: request expired";
    UpdateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedSignatureOrSecretMissing"] = "Authentication failed: signature or secret missing";
    UpdateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedWorkspaceMissing"] = "Authentication failed: workspace missing";
    UpdateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedKeyMissing"] = "Authentication failed: key missing";
    UpdateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyIssIssuerMissingInJwt"] = "Authentication failed: property 'iss' (issuer) missing in JWT";
    UpdateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertySubSubjectMissingInJwt"] = "Authentication failed: property 'sub' (subject) missing in JWT";
    UpdateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyExpExpirationTimeMissingInJwt"] = "Authentication failed: property 'exp' (expiration time) missing in JWT";
    UpdateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedInvalidIssIssuer"] = "Authentication failed: invalid 'iss' (issuer)";
    UpdateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedIncorrectSignature"] = "Authentication failed: incorrect signature";
    UpdateTemplate401ApplicationJsonErrorEnum["AuthenticationFailed"] = "Authentication failed";
})(UpdateTemplate401ApplicationJsonErrorEnum = exports.UpdateTemplate401ApplicationJsonErrorEnum || (exports.UpdateTemplate401ApplicationJsonErrorEnum = {}));
var UpdateTemplate401ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateTemplate401ApplicationJson, _super);
    function UpdateTemplate401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], UpdateTemplate401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpdateTemplate401ApplicationJson.prototype, "status", void 0);
    return UpdateTemplate401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateTemplate401ApplicationJson = UpdateTemplate401ApplicationJson;
var UpdateTemplate403ApplicationJsonErrorEnum;
(function (UpdateTemplate403ApplicationJsonErrorEnum) {
    UpdateTemplate403ApplicationJsonErrorEnum["YourAccountHasExceededTheMonthlyDocumentGenerationLimit"] = "Your account has exceeded the monthly document generation limit.";
})(UpdateTemplate403ApplicationJsonErrorEnum = exports.UpdateTemplate403ApplicationJsonErrorEnum || (exports.UpdateTemplate403ApplicationJsonErrorEnum = {}));
var UpdateTemplate403ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateTemplate403ApplicationJson, _super);
    function UpdateTemplate403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], UpdateTemplate403ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpdateTemplate403ApplicationJson.prototype, "status", void 0);
    return UpdateTemplate403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateTemplate403ApplicationJson = UpdateTemplate403ApplicationJson;
var UpdateTemplate404ApplicationJsonErrorEnum;
(function (UpdateTemplate404ApplicationJsonErrorEnum) {
    UpdateTemplate404ApplicationJsonErrorEnum["EntityNotFound"] = "Entity not found";
    UpdateTemplate404ApplicationJsonErrorEnum["ResourceNotFound"] = "Resource not found";
    UpdateTemplate404ApplicationJsonErrorEnum["NoneOfTheTemplatesIsAvailableForTheWorkspace"] = "None of the templates is available for the workspace.";
})(UpdateTemplate404ApplicationJsonErrorEnum = exports.UpdateTemplate404ApplicationJsonErrorEnum || (exports.UpdateTemplate404ApplicationJsonErrorEnum = {}));
var UpdateTemplate404ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateTemplate404ApplicationJson, _super);
    function UpdateTemplate404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], UpdateTemplate404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpdateTemplate404ApplicationJson.prototype, "status", void 0);
    return UpdateTemplate404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateTemplate404ApplicationJson = UpdateTemplate404ApplicationJson;
var UpdateTemplate422ApplicationJsonErrorEnum;
(function (UpdateTemplate422ApplicationJsonErrorEnum) {
    UpdateTemplate422ApplicationJsonErrorEnum["UnableToParseJsonPleaseCheckFormatting"] = "Unable to parse JSON, please check formatting";
    UpdateTemplate422ApplicationJsonErrorEnum["RequiredParameterMissing"] = "Required parameter missing";
    UpdateTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateDefinitionNotDefined"] = "Required parameter missing: template definition not defined";
    UpdateTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateNotDefined"] = "Required parameter missing: template not defined";
})(UpdateTemplate422ApplicationJsonErrorEnum = exports.UpdateTemplate422ApplicationJsonErrorEnum || (exports.UpdateTemplate422ApplicationJsonErrorEnum = {}));
var UpdateTemplate422ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateTemplate422ApplicationJson, _super);
    function UpdateTemplate422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], UpdateTemplate422ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpdateTemplate422ApplicationJson.prototype, "status", void 0);
    return UpdateTemplate422ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateTemplate422ApplicationJson = UpdateTemplate422ApplicationJson;
var UpdateTemplate500ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateTemplate500ApplicationJson, _super);
    function UpdateTemplate500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], UpdateTemplate500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpdateTemplate500ApplicationJson.prototype, "status", void 0);
    return UpdateTemplate500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateTemplate500ApplicationJson = UpdateTemplate500ApplicationJson;
var UpdateTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateTemplateRequest, _super);
    function UpdateTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateTemplateQueryParams)
    ], UpdateTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TemplateDefinitionNew)
    ], UpdateTemplateRequest.prototype, "request", void 0);
    return UpdateTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateTemplateRequest = UpdateTemplateRequest;
var UpdateTemplateResponse = /** @class */ (function (_super) {
    __extends(UpdateTemplateResponse, _super);
    function UpdateTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateTemplate200ApplicationJson)
    ], UpdateTemplateResponse.prototype, "updateTemplate200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateTemplate401ApplicationJson)
    ], UpdateTemplateResponse.prototype, "updateTemplate401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateTemplate403ApplicationJson)
    ], UpdateTemplateResponse.prototype, "updateTemplate403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateTemplate404ApplicationJson)
    ], UpdateTemplateResponse.prototype, "updateTemplate404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateTemplate422ApplicationJson)
    ], UpdateTemplateResponse.prototype, "updateTemplate422ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateTemplate500ApplicationJson)
    ], UpdateTemplateResponse.prototype, "updateTemplate500ApplicationJSONObject", void 0);
    return UpdateTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateTemplateResponse = UpdateTemplateResponse;
