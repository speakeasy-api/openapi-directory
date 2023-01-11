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
exports.CopyTemplateResponse = exports.CopyTemplateRequest = exports.CopyTemplate500ApplicationJson = exports.CopyTemplate422ApplicationJson = exports.CopyTemplate422ApplicationJsonErrorEnum = exports.CopyTemplate404ApplicationJson = exports.CopyTemplate404ApplicationJsonErrorEnum = exports.CopyTemplate403ApplicationJson = exports.CopyTemplate403ApplicationJsonErrorEnum = exports.CopyTemplate401ApplicationJson = exports.CopyTemplate401ApplicationJsonErrorEnum = exports.CopyTemplate200ApplicationJson = exports.CopyTemplateQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CopyTemplateQueryParams = /** @class */ (function (_super) {
    __extends(CopyTemplateQueryParams, _super);
    function CopyTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], CopyTemplateQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=templateId" }),
        __metadata("design:type", Number)
    ], CopyTemplateQueryParams.prototype, "templateId", void 0);
    return CopyTemplateQueryParams;
}(utils_1.SpeakeasyBase));
exports.CopyTemplateQueryParams = CopyTemplateQueryParams;
var CopyTemplate200ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyTemplate200ApplicationJson, _super);
    function CopyTemplate200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response" }),
        __metadata("design:type", shared.TemplateDefinition)
    ], CopyTemplate200ApplicationJson.prototype, "response", void 0);
    return CopyTemplate200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CopyTemplate200ApplicationJson = CopyTemplate200ApplicationJson;
var CopyTemplate401ApplicationJsonErrorEnum;
(function (CopyTemplate401ApplicationJsonErrorEnum) {
    CopyTemplate401ApplicationJsonErrorEnum["AuthenticationFailedRequestExpired"] = "Authentication failed: request expired";
    CopyTemplate401ApplicationJsonErrorEnum["AuthenticationFailedSignatureOrSecretMissing"] = "Authentication failed: signature or secret missing";
    CopyTemplate401ApplicationJsonErrorEnum["AuthenticationFailedWorkspaceMissing"] = "Authentication failed: workspace missing";
    CopyTemplate401ApplicationJsonErrorEnum["AuthenticationFailedKeyMissing"] = "Authentication failed: key missing";
    CopyTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyIssIssuerMissingInJwt"] = "Authentication failed: property 'iss' (issuer) missing in JWT";
    CopyTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertySubSubjectMissingInJwt"] = "Authentication failed: property 'sub' (subject) missing in JWT";
    CopyTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyExpExpirationTimeMissingInJwt"] = "Authentication failed: property 'exp' (expiration time) missing in JWT";
    CopyTemplate401ApplicationJsonErrorEnum["AuthenticationFailedInvalidIssIssuer"] = "Authentication failed: invalid 'iss' (issuer)";
    CopyTemplate401ApplicationJsonErrorEnum["AuthenticationFailedIncorrectSignature"] = "Authentication failed: incorrect signature";
    CopyTemplate401ApplicationJsonErrorEnum["AuthenticationFailed"] = "Authentication failed";
})(CopyTemplate401ApplicationJsonErrorEnum = exports.CopyTemplate401ApplicationJsonErrorEnum || (exports.CopyTemplate401ApplicationJsonErrorEnum = {}));
var CopyTemplate401ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyTemplate401ApplicationJson, _super);
    function CopyTemplate401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], CopyTemplate401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], CopyTemplate401ApplicationJson.prototype, "status", void 0);
    return CopyTemplate401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CopyTemplate401ApplicationJson = CopyTemplate401ApplicationJson;
var CopyTemplate403ApplicationJsonErrorEnum;
(function (CopyTemplate403ApplicationJsonErrorEnum) {
    CopyTemplate403ApplicationJsonErrorEnum["YourAccountHasExceededTheMonthlyDocumentGenerationLimit"] = "Your account has exceeded the monthly document generation limit.";
})(CopyTemplate403ApplicationJsonErrorEnum = exports.CopyTemplate403ApplicationJsonErrorEnum || (exports.CopyTemplate403ApplicationJsonErrorEnum = {}));
var CopyTemplate403ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyTemplate403ApplicationJson, _super);
    function CopyTemplate403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], CopyTemplate403ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], CopyTemplate403ApplicationJson.prototype, "status", void 0);
    return CopyTemplate403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CopyTemplate403ApplicationJson = CopyTemplate403ApplicationJson;
var CopyTemplate404ApplicationJsonErrorEnum;
(function (CopyTemplate404ApplicationJsonErrorEnum) {
    CopyTemplate404ApplicationJsonErrorEnum["EntityNotFound"] = "Entity not found";
    CopyTemplate404ApplicationJsonErrorEnum["ResourceNotFound"] = "Resource not found";
    CopyTemplate404ApplicationJsonErrorEnum["NoneOfTheTemplatesIsAvailableForTheWorkspace"] = "None of the templates is available for the workspace.";
})(CopyTemplate404ApplicationJsonErrorEnum = exports.CopyTemplate404ApplicationJsonErrorEnum || (exports.CopyTemplate404ApplicationJsonErrorEnum = {}));
var CopyTemplate404ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyTemplate404ApplicationJson, _super);
    function CopyTemplate404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], CopyTemplate404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], CopyTemplate404ApplicationJson.prototype, "status", void 0);
    return CopyTemplate404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CopyTemplate404ApplicationJson = CopyTemplate404ApplicationJson;
var CopyTemplate422ApplicationJsonErrorEnum;
(function (CopyTemplate422ApplicationJsonErrorEnum) {
    CopyTemplate422ApplicationJsonErrorEnum["UnableToParseJsonPleaseCheckFormatting"] = "Unable to parse JSON, please check formatting";
    CopyTemplate422ApplicationJsonErrorEnum["RequiredParameterMissing"] = "Required parameter missing";
    CopyTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateDefinitionNotDefined"] = "Required parameter missing: template definition not defined";
    CopyTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateNotDefined"] = "Required parameter missing: template not defined";
})(CopyTemplate422ApplicationJsonErrorEnum = exports.CopyTemplate422ApplicationJsonErrorEnum || (exports.CopyTemplate422ApplicationJsonErrorEnum = {}));
var CopyTemplate422ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyTemplate422ApplicationJson, _super);
    function CopyTemplate422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], CopyTemplate422ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], CopyTemplate422ApplicationJson.prototype, "status", void 0);
    return CopyTemplate422ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CopyTemplate422ApplicationJson = CopyTemplate422ApplicationJson;
var CopyTemplate500ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyTemplate500ApplicationJson, _super);
    function CopyTemplate500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], CopyTemplate500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], CopyTemplate500ApplicationJson.prototype, "status", void 0);
    return CopyTemplate500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CopyTemplate500ApplicationJson = CopyTemplate500ApplicationJson;
var CopyTemplateRequest = /** @class */ (function (_super) {
    __extends(CopyTemplateRequest, _super);
    function CopyTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CopyTemplateQueryParams)
    ], CopyTemplateRequest.prototype, "queryParams", void 0);
    return CopyTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.CopyTemplateRequest = CopyTemplateRequest;
var CopyTemplateResponse = /** @class */ (function (_super) {
    __extends(CopyTemplateResponse, _super);
    function CopyTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CopyTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CopyTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CopyTemplate200ApplicationJson)
    ], CopyTemplateResponse.prototype, "copyTemplate200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CopyTemplate401ApplicationJson)
    ], CopyTemplateResponse.prototype, "copyTemplate401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CopyTemplate403ApplicationJson)
    ], CopyTemplateResponse.prototype, "copyTemplate403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CopyTemplate404ApplicationJson)
    ], CopyTemplateResponse.prototype, "copyTemplate404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CopyTemplate422ApplicationJson)
    ], CopyTemplateResponse.prototype, "copyTemplate422ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CopyTemplate500ApplicationJson)
    ], CopyTemplateResponse.prototype, "copyTemplate500ApplicationJSONObject", void 0);
    return CopyTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.CopyTemplateResponse = CopyTemplateResponse;
