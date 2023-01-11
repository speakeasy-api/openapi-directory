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
exports.MergeTemplateResponse = exports.MergeTemplateRequest = exports.MergeTemplate500ApplicationJson = exports.MergeTemplate422ApplicationJson = exports.MergeTemplate422ApplicationJsonErrorEnum = exports.MergeTemplate404ApplicationJson = exports.MergeTemplate404ApplicationJsonErrorEnum = exports.MergeTemplate403ApplicationJson = exports.MergeTemplate403ApplicationJsonErrorEnum = exports.MergeTemplate401ApplicationJson = exports.MergeTemplate401ApplicationJsonErrorEnum = exports.MergeTemplate200ApplicationJson = exports.MergeTemplate200ApplicationJsonMeta = exports.MergeTemplateQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MergeTemplateQueryParams = /** @class */ (function (_super) {
    __extends(MergeTemplateQueryParams, _super);
    function MergeTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], MergeTemplateQueryParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], MergeTemplateQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=output" }),
        __metadata("design:type", String)
    ], MergeTemplateQueryParams.prototype, "output", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=templateId" }),
        __metadata("design:type", Number)
    ], MergeTemplateQueryParams.prototype, "templateId", void 0);
    return MergeTemplateQueryParams;
}(utils_1.SpeakeasyBase));
exports.MergeTemplateQueryParams = MergeTemplateQueryParams;
var MergeTemplate200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(MergeTemplate200ApplicationJsonMeta, _super);
    function MergeTemplate200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content-type" }),
        __metadata("design:type", String)
    ], MergeTemplate200ApplicationJsonMeta.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], MergeTemplate200ApplicationJsonMeta.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encoding" }),
        __metadata("design:type", String)
    ], MergeTemplate200ApplicationJsonMeta.prototype, "encoding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MergeTemplate200ApplicationJsonMeta.prototype, "name", void 0);
    return MergeTemplate200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.MergeTemplate200ApplicationJsonMeta = MergeTemplate200ApplicationJsonMeta;
var MergeTemplate200ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplate200ApplicationJson, _super);
    function MergeTemplate200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", MergeTemplate200ApplicationJsonMeta)
    ], MergeTemplate200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response" }),
        __metadata("design:type", String)
    ], MergeTemplate200ApplicationJson.prototype, "response", void 0);
    return MergeTemplate200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MergeTemplate200ApplicationJson = MergeTemplate200ApplicationJson;
var MergeTemplate401ApplicationJsonErrorEnum;
(function (MergeTemplate401ApplicationJsonErrorEnum) {
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedRequestExpired"] = "Authentication failed: request expired";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedSignatureOrSecretMissing"] = "Authentication failed: signature or secret missing";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedWorkspaceMissing"] = "Authentication failed: workspace missing";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedKeyMissing"] = "Authentication failed: key missing";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyIssIssuerMissingInJwt"] = "Authentication failed: property 'iss' (issuer) missing in JWT";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertySubSubjectMissingInJwt"] = "Authentication failed: property 'sub' (subject) missing in JWT";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedPropertyExpExpirationTimeMissingInJwt"] = "Authentication failed: property 'exp' (expiration time) missing in JWT";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedInvalidIssIssuer"] = "Authentication failed: invalid 'iss' (issuer)";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailedIncorrectSignature"] = "Authentication failed: incorrect signature";
    MergeTemplate401ApplicationJsonErrorEnum["AuthenticationFailed"] = "Authentication failed";
})(MergeTemplate401ApplicationJsonErrorEnum = exports.MergeTemplate401ApplicationJsonErrorEnum || (exports.MergeTemplate401ApplicationJsonErrorEnum = {}));
var MergeTemplate401ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplate401ApplicationJson, _super);
    function MergeTemplate401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplate401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplate401ApplicationJson.prototype, "status", void 0);
    return MergeTemplate401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MergeTemplate401ApplicationJson = MergeTemplate401ApplicationJson;
var MergeTemplate403ApplicationJsonErrorEnum;
(function (MergeTemplate403ApplicationJsonErrorEnum) {
    MergeTemplate403ApplicationJsonErrorEnum["YourAccountHasExceededTheMonthlyDocumentGenerationLimit"] = "Your account has exceeded the monthly document generation limit.";
})(MergeTemplate403ApplicationJsonErrorEnum = exports.MergeTemplate403ApplicationJsonErrorEnum || (exports.MergeTemplate403ApplicationJsonErrorEnum = {}));
var MergeTemplate403ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplate403ApplicationJson, _super);
    function MergeTemplate403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplate403ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplate403ApplicationJson.prototype, "status", void 0);
    return MergeTemplate403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MergeTemplate403ApplicationJson = MergeTemplate403ApplicationJson;
var MergeTemplate404ApplicationJsonErrorEnum;
(function (MergeTemplate404ApplicationJsonErrorEnum) {
    MergeTemplate404ApplicationJsonErrorEnum["EntityNotFound"] = "Entity not found";
    MergeTemplate404ApplicationJsonErrorEnum["ResourceNotFound"] = "Resource not found";
    MergeTemplate404ApplicationJsonErrorEnum["NoneOfTheTemplatesIsAvailableForTheWorkspace"] = "None of the templates is available for the workspace.";
})(MergeTemplate404ApplicationJsonErrorEnum = exports.MergeTemplate404ApplicationJsonErrorEnum || (exports.MergeTemplate404ApplicationJsonErrorEnum = {}));
var MergeTemplate404ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplate404ApplicationJson, _super);
    function MergeTemplate404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplate404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplate404ApplicationJson.prototype, "status", void 0);
    return MergeTemplate404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MergeTemplate404ApplicationJson = MergeTemplate404ApplicationJson;
var MergeTemplate422ApplicationJsonErrorEnum;
(function (MergeTemplate422ApplicationJsonErrorEnum) {
    MergeTemplate422ApplicationJsonErrorEnum["UnableToParseJsonPleaseCheckFormatting"] = "Unable to parse JSON, please check formatting";
    MergeTemplate422ApplicationJsonErrorEnum["RequiredParameterMissing"] = "Required parameter missing";
    MergeTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateDefinitionNotDefined"] = "Required parameter missing: template definition not defined";
    MergeTemplate422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateNotDefined"] = "Required parameter missing: template not defined";
})(MergeTemplate422ApplicationJsonErrorEnum = exports.MergeTemplate422ApplicationJsonErrorEnum || (exports.MergeTemplate422ApplicationJsonErrorEnum = {}));
var MergeTemplate422ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplate422ApplicationJson, _super);
    function MergeTemplate422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplate422ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplate422ApplicationJson.prototype, "status", void 0);
    return MergeTemplate422ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MergeTemplate422ApplicationJson = MergeTemplate422ApplicationJson;
var MergeTemplate500ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplate500ApplicationJson, _super);
    function MergeTemplate500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplate500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplate500ApplicationJson.prototype, "status", void 0);
    return MergeTemplate500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MergeTemplate500ApplicationJson = MergeTemplate500ApplicationJson;
var MergeTemplateRequest = /** @class */ (function (_super) {
    __extends(MergeTemplateRequest, _super);
    function MergeTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MergeTemplateQueryParams)
    ], MergeTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Data)
    ], MergeTemplateRequest.prototype, "request", void 0);
    return MergeTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.MergeTemplateRequest = MergeTemplateRequest;
var MergeTemplateResponse = /** @class */ (function (_super) {
    __extends(MergeTemplateResponse, _super);
    function MergeTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MergeTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MergeTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MergeTemplate200ApplicationJson)
    ], MergeTemplateResponse.prototype, "mergeTemplate200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MergeTemplate401ApplicationJson)
    ], MergeTemplateResponse.prototype, "mergeTemplate401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MergeTemplate403ApplicationJson)
    ], MergeTemplateResponse.prototype, "mergeTemplate403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MergeTemplate404ApplicationJson)
    ], MergeTemplateResponse.prototype, "mergeTemplate404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MergeTemplate422ApplicationJson)
    ], MergeTemplateResponse.prototype, "mergeTemplate422ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MergeTemplate500ApplicationJson)
    ], MergeTemplateResponse.prototype, "mergeTemplate500ApplicationJSONObject", void 0);
    return MergeTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.MergeTemplateResponse = MergeTemplateResponse;
