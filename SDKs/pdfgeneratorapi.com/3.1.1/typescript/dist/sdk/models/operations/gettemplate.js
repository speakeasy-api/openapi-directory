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
exports.GetTemplateResponse = exports.GetTemplateRequest = exports.GetTemplate500ApplicationJson = exports.GetTemplate422ApplicationJson = exports.GetTemplate422ApplicationJsonErrorEnum = exports.GetTemplate404ApplicationJson = exports.GetTemplate404ApplicationJsonErrorEnum = exports.GetTemplate403ApplicationJson = exports.GetTemplate403ApplicationJsonErrorEnum = exports.GetTemplate401ApplicationJson = exports.GetTemplate401ApplicationJsonErrorEnum = exports.GetTemplate200ApplicationJson = exports.GetTemplateQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTemplateQueryParams = /** @class */ (function (_super) {
    __extends(GetTemplateQueryParams, _super);
    function GetTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=templateId" }),
        __metadata("design:type", Number)
    ], GetTemplateQueryParams.prototype, "templateId", void 0);
    return GetTemplateQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTemplateQueryParams = GetTemplateQueryParams;
var GetTemplate200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplate200ApplicationJson, _super);
    function GetTemplate200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response" }),
        __metadata("design:type", shared.TemplateDefinition)
    ], GetTemplate200ApplicationJson.prototype, "response", void 0);
    return GetTemplate200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTemplate200ApplicationJson = GetTemplate200ApplicationJson;
var GetTemplate401ApplicationJsonErrorEnum;
(function (GetTemplate401ApplicationJsonErrorEnum) {
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedRequestExpired"] = "Authentication failed: request expired";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedSignatureOrSecretMissing"] = "Authentication failed: signature or secret missing";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedWorkspaceMissing"] = "Authentication failed: workspace missing";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedKeyMissing"] = "Authentication failed: key missing";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyIssIssuerMissingInJwt"] = "Authentication failed: property 'iss' (issuer) missing in JWT";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertySubSubjectMissingInJwt"] = "Authentication failed: property 'sub' (subject) missing in JWT";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyExpExpirationTimeMissingInJwt"] = "Authentication failed: property 'exp' (expiration time) missing in JWT";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedInvalidIssIssuer"] = "Authentication failed: invalid 'iss' (issuer)";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailedIncorrectSignature"] = "Authentication failed: incorrect signature";
    GetTemplate401ApplicationJsonErrorEnum["AuthenticationFailed"] = "Authentication failed";
})(GetTemplate401ApplicationJsonErrorEnum = exports.GetTemplate401ApplicationJsonErrorEnum || (exports.GetTemplate401ApplicationJsonErrorEnum = {}));
var GetTemplate401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplate401ApplicationJson, _super);
    function GetTemplate401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetTemplate401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTemplate401ApplicationJson.prototype, "status", void 0);
    return GetTemplate401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTemplate401ApplicationJson = GetTemplate401ApplicationJson;
var GetTemplate403ApplicationJsonErrorEnum;
(function (GetTemplate403ApplicationJsonErrorEnum) {
    GetTemplate403ApplicationJsonErrorEnum["YourAccountHasExceededTheMonthlyDocumentGenerationLimit"] = "Your account has exceeded the monthly document generation limit.";
})(GetTemplate403ApplicationJsonErrorEnum = exports.GetTemplate403ApplicationJsonErrorEnum || (exports.GetTemplate403ApplicationJsonErrorEnum = {}));
var GetTemplate403ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplate403ApplicationJson, _super);
    function GetTemplate403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetTemplate403ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTemplate403ApplicationJson.prototype, "status", void 0);
    return GetTemplate403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTemplate403ApplicationJson = GetTemplate403ApplicationJson;
var GetTemplate404ApplicationJsonErrorEnum;
(function (GetTemplate404ApplicationJsonErrorEnum) {
    GetTemplate404ApplicationJsonErrorEnum["EntityNotFound"] = "Entity not found";
    GetTemplate404ApplicationJsonErrorEnum["ResourceNotFound"] = "Resource not found";
    GetTemplate404ApplicationJsonErrorEnum["NoneOfTheTemplatesIsAvailableForTheWorkspace"] = "None of the templates is available for the workspace.";
})(GetTemplate404ApplicationJsonErrorEnum = exports.GetTemplate404ApplicationJsonErrorEnum || (exports.GetTemplate404ApplicationJsonErrorEnum = {}));
var GetTemplate404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplate404ApplicationJson, _super);
    function GetTemplate404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetTemplate404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTemplate404ApplicationJson.prototype, "status", void 0);
    return GetTemplate404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTemplate404ApplicationJson = GetTemplate404ApplicationJson;
var GetTemplate422ApplicationJsonErrorEnum;
(function (GetTemplate422ApplicationJsonErrorEnum) {
    GetTemplate422ApplicationJsonErrorEnum["UnableToParseJsonPleaseCheckFormatting"] = "Unable to parse JSON, please check formatting";
    GetTemplate422ApplicationJsonErrorEnum["RequiredParameterMissing"] = "Required parameter missing";
    GetTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateDefinitionNotDefined"] = "Required parameter missing: template definition not defined";
    GetTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateNotDefined"] = "Required parameter missing: template not defined";
})(GetTemplate422ApplicationJsonErrorEnum = exports.GetTemplate422ApplicationJsonErrorEnum || (exports.GetTemplate422ApplicationJsonErrorEnum = {}));
var GetTemplate422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplate422ApplicationJson, _super);
    function GetTemplate422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetTemplate422ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTemplate422ApplicationJson.prototype, "status", void 0);
    return GetTemplate422ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTemplate422ApplicationJson = GetTemplate422ApplicationJson;
var GetTemplate500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTemplate500ApplicationJson, _super);
    function GetTemplate500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetTemplate500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTemplate500ApplicationJson.prototype, "status", void 0);
    return GetTemplate500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTemplate500ApplicationJson = GetTemplate500ApplicationJson;
var GetTemplateRequest = /** @class */ (function (_super) {
    __extends(GetTemplateRequest, _super);
    function GetTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTemplateQueryParams)
    ], GetTemplateRequest.prototype, "queryParams", void 0);
    return GetTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.GetTemplateRequest = GetTemplateRequest;
var GetTemplateResponse = /** @class */ (function (_super) {
    __extends(GetTemplateResponse, _super);
    function GetTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTemplate200ApplicationJson)
    ], GetTemplateResponse.prototype, "getTemplate200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTemplate401ApplicationJson)
    ], GetTemplateResponse.prototype, "getTemplate401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTemplate403ApplicationJson)
    ], GetTemplateResponse.prototype, "getTemplate403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTemplate404ApplicationJson)
    ], GetTemplateResponse.prototype, "getTemplate404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTemplate422ApplicationJson)
    ], GetTemplateResponse.prototype, "getTemplate422ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTemplate500ApplicationJson)
    ], GetTemplateResponse.prototype, "getTemplate500ApplicationJSONObject", void 0);
    return GetTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.GetTemplateResponse = GetTemplateResponse;
