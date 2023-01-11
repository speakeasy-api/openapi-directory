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
exports.CreateTemplateResponse = exports.CreateTemplateRequest = exports.CreateTemplate500ApplicationJson = exports.CreateTemplate422ApplicationJson = exports.CreateTemplate422ApplicationJsonErrorEnum = exports.CreateTemplate404ApplicationJson = exports.CreateTemplate404ApplicationJsonErrorEnum = exports.CreateTemplate403ApplicationJson = exports.CreateTemplate403ApplicationJsonErrorEnum = exports.CreateTemplate401ApplicationJson = exports.CreateTemplate401ApplicationJsonErrorEnum = exports.CreateTemplate200ApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateTemplate200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTemplate200ApplicationJson, _super);
    function CreateTemplate200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response" }),
        __metadata("design:type", shared.TemplateDefinition)
    ], CreateTemplate200ApplicationJson.prototype, "response", void 0);
    return CreateTemplate200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateTemplate200ApplicationJson = CreateTemplate200ApplicationJson;
var CreateTemplate401ApplicationJsonErrorEnum;
(function (CreateTemplate401ApplicationJsonErrorEnum) {
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedRequestExpired"] = "Authentication failed: request expired";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedSignatureOrSecretMissing"] = "Authentication failed: signature or secret missing";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedWorkspaceMissing"] = "Authentication failed: workspace missing";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedKeyMissing"] = "Authentication failed: key missing";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyIssIssuerMissingInJwt"] = "Authentication failed: property 'iss' (issuer) missing in JWT";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertySubSubjectMissingInJwt"] = "Authentication failed: property 'sub' (subject) missing in JWT";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyExpExpirationTimeMissingInJwt"] = "Authentication failed: property 'exp' (expiration time) missing in JWT";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedInvalidIssIssuer"] = "Authentication failed: invalid 'iss' (issuer)";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailedIncorrectSignature"] = "Authentication failed: incorrect signature";
    CreateTemplate401ApplicationJsonErrorEnum["AuthenticationFailed"] = "Authentication failed";
})(CreateTemplate401ApplicationJsonErrorEnum = exports.CreateTemplate401ApplicationJsonErrorEnum || (exports.CreateTemplate401ApplicationJsonErrorEnum = {}));
var CreateTemplate401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTemplate401ApplicationJson, _super);
    function CreateTemplate401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], CreateTemplate401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], CreateTemplate401ApplicationJson.prototype, "status", void 0);
    return CreateTemplate401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateTemplate401ApplicationJson = CreateTemplate401ApplicationJson;
var CreateTemplate403ApplicationJsonErrorEnum;
(function (CreateTemplate403ApplicationJsonErrorEnum) {
    CreateTemplate403ApplicationJsonErrorEnum["YourAccountHasExceededTheMonthlyDocumentGenerationLimit"] = "Your account has exceeded the monthly document generation limit.";
})(CreateTemplate403ApplicationJsonErrorEnum = exports.CreateTemplate403ApplicationJsonErrorEnum || (exports.CreateTemplate403ApplicationJsonErrorEnum = {}));
var CreateTemplate403ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTemplate403ApplicationJson, _super);
    function CreateTemplate403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], CreateTemplate403ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], CreateTemplate403ApplicationJson.prototype, "status", void 0);
    return CreateTemplate403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateTemplate403ApplicationJson = CreateTemplate403ApplicationJson;
var CreateTemplate404ApplicationJsonErrorEnum;
(function (CreateTemplate404ApplicationJsonErrorEnum) {
    CreateTemplate404ApplicationJsonErrorEnum["EntityNotFound"] = "Entity not found";
    CreateTemplate404ApplicationJsonErrorEnum["ResourceNotFound"] = "Resource not found";
    CreateTemplate404ApplicationJsonErrorEnum["NoneOfTheTemplatesIsAvailableForTheWorkspace"] = "None of the templates is available for the workspace.";
})(CreateTemplate404ApplicationJsonErrorEnum = exports.CreateTemplate404ApplicationJsonErrorEnum || (exports.CreateTemplate404ApplicationJsonErrorEnum = {}));
var CreateTemplate404ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTemplate404ApplicationJson, _super);
    function CreateTemplate404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], CreateTemplate404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], CreateTemplate404ApplicationJson.prototype, "status", void 0);
    return CreateTemplate404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateTemplate404ApplicationJson = CreateTemplate404ApplicationJson;
var CreateTemplate422ApplicationJsonErrorEnum;
(function (CreateTemplate422ApplicationJsonErrorEnum) {
    CreateTemplate422ApplicationJsonErrorEnum["UnableToParseJsonPleaseCheckFormatting"] = "Unable to parse JSON, please check formatting";
    CreateTemplate422ApplicationJsonErrorEnum["RequiredParameterMissing"] = "Required parameter missing";
    CreateTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateDefinitionNotDefined"] = "Required parameter missing: template definition not defined";
    CreateTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateNotDefined"] = "Required parameter missing: template not defined";
})(CreateTemplate422ApplicationJsonErrorEnum = exports.CreateTemplate422ApplicationJsonErrorEnum || (exports.CreateTemplate422ApplicationJsonErrorEnum = {}));
var CreateTemplate422ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTemplate422ApplicationJson, _super);
    function CreateTemplate422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], CreateTemplate422ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], CreateTemplate422ApplicationJson.prototype, "status", void 0);
    return CreateTemplate422ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateTemplate422ApplicationJson = CreateTemplate422ApplicationJson;
var CreateTemplate500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTemplate500ApplicationJson, _super);
    function CreateTemplate500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], CreateTemplate500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], CreateTemplate500ApplicationJson.prototype, "status", void 0);
    return CreateTemplate500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateTemplate500ApplicationJson = CreateTemplate500ApplicationJson;
var CreateTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateTemplateRequest, _super);
    function CreateTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TemplateDefinitionNew)
    ], CreateTemplateRequest.prototype, "request", void 0);
    return CreateTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.CreateTemplateRequest = CreateTemplateRequest;
var CreateTemplateResponse = /** @class */ (function (_super) {
    __extends(CreateTemplateResponse, _super);
    function CreateTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTemplate200ApplicationJson)
    ], CreateTemplateResponse.prototype, "createTemplate200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTemplate401ApplicationJson)
    ], CreateTemplateResponse.prototype, "createTemplate401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTemplate403ApplicationJson)
    ], CreateTemplateResponse.prototype, "createTemplate403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTemplate404ApplicationJson)
    ], CreateTemplateResponse.prototype, "createTemplate404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTemplate422ApplicationJson)
    ], CreateTemplateResponse.prototype, "createTemplate422ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTemplate500ApplicationJson)
    ], CreateTemplateResponse.prototype, "createTemplate500ApplicationJSONObject", void 0);
    return CreateTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.CreateTemplateResponse = CreateTemplateResponse;
