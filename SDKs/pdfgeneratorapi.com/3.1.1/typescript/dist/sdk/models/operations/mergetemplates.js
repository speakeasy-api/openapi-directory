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
exports.MergeTemplatesResponse = exports.MergeTemplatesRequest = exports.MergeTemplates500ApplicationJson = exports.MergeTemplates422ApplicationJson = exports.MergeTemplates422ApplicationJsonErrorEnum = exports.MergeTemplates404ApplicationJson = exports.MergeTemplates404ApplicationJsonErrorEnum = exports.MergeTemplates403ApplicationJson = exports.MergeTemplates403ApplicationJsonErrorEnum = exports.MergeTemplates401ApplicationJson = exports.MergeTemplates401ApplicationJsonErrorEnum = exports.MergeTemplates200ApplicationJson = exports.MergeTemplates200ApplicationJsonMeta = exports.MergeTemplatesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MergeTemplatesQueryParams = /** @class */ (function (_super) {
    __extends(MergeTemplatesQueryParams, _super);
    function MergeTemplatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], MergeTemplatesQueryParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], MergeTemplatesQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=output" }),
        __metadata("design:type", String)
    ], MergeTemplatesQueryParams.prototype, "output", void 0);
    return MergeTemplatesQueryParams;
}(utils_1.SpeakeasyBase));
exports.MergeTemplatesQueryParams = MergeTemplatesQueryParams;
var MergeTemplates200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(MergeTemplates200ApplicationJsonMeta, _super);
    function MergeTemplates200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content-type" }),
        __metadata("design:type", String)
    ], MergeTemplates200ApplicationJsonMeta.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], MergeTemplates200ApplicationJsonMeta.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encoding" }),
        __metadata("design:type", String)
    ], MergeTemplates200ApplicationJsonMeta.prototype, "encoding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MergeTemplates200ApplicationJsonMeta.prototype, "name", void 0);
    return MergeTemplates200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.MergeTemplates200ApplicationJsonMeta = MergeTemplates200ApplicationJsonMeta;
var MergeTemplates200ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplates200ApplicationJson, _super);
    function MergeTemplates200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", MergeTemplates200ApplicationJsonMeta)
    ], MergeTemplates200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response" }),
        __metadata("design:type", String)
    ], MergeTemplates200ApplicationJson.prototype, "response", void 0);
    return MergeTemplates200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MergeTemplates200ApplicationJson = MergeTemplates200ApplicationJson;
var MergeTemplates401ApplicationJsonErrorEnum;
(function (MergeTemplates401ApplicationJsonErrorEnum) {
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedRequestExpired"] = "Authentication failed: request expired";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedSignatureOrSecretMissing"] = "Authentication failed: signature or secret missing";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedWorkspaceMissing"] = "Authentication failed: workspace missing";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedKeyMissing"] = "Authentication failed: key missing";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedPropertyIssIssuerMissingInJwt"] = "Authentication failed: property 'iss' (issuer) missing in JWT";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedPropertySubSubjectMissingInJwt"] = "Authentication failed: property 'sub' (subject) missing in JWT";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedPropertyExpExpirationTimeMissingInJwt"] = "Authentication failed: property 'exp' (expiration time) missing in JWT";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedInvalidIssIssuer"] = "Authentication failed: invalid 'iss' (issuer)";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailedIncorrectSignature"] = "Authentication failed: incorrect signature";
    MergeTemplates401ApplicationJsonErrorEnum["AuthenticationFailed"] = "Authentication failed";
})(MergeTemplates401ApplicationJsonErrorEnum = exports.MergeTemplates401ApplicationJsonErrorEnum || (exports.MergeTemplates401ApplicationJsonErrorEnum = {}));
var MergeTemplates401ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplates401ApplicationJson, _super);
    function MergeTemplates401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplates401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplates401ApplicationJson.prototype, "status", void 0);
    return MergeTemplates401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MergeTemplates401ApplicationJson = MergeTemplates401ApplicationJson;
var MergeTemplates403ApplicationJsonErrorEnum;
(function (MergeTemplates403ApplicationJsonErrorEnum) {
    MergeTemplates403ApplicationJsonErrorEnum["YourAccountHasExceededTheMonthlyDocumentGenerationLimit"] = "Your account has exceeded the monthly document generation limit.";
})(MergeTemplates403ApplicationJsonErrorEnum = exports.MergeTemplates403ApplicationJsonErrorEnum || (exports.MergeTemplates403ApplicationJsonErrorEnum = {}));
var MergeTemplates403ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplates403ApplicationJson, _super);
    function MergeTemplates403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplates403ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplates403ApplicationJson.prototype, "status", void 0);
    return MergeTemplates403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MergeTemplates403ApplicationJson = MergeTemplates403ApplicationJson;
var MergeTemplates404ApplicationJsonErrorEnum;
(function (MergeTemplates404ApplicationJsonErrorEnum) {
    MergeTemplates404ApplicationJsonErrorEnum["EntityNotFound"] = "Entity not found";
    MergeTemplates404ApplicationJsonErrorEnum["ResourceNotFound"] = "Resource not found";
    MergeTemplates404ApplicationJsonErrorEnum["NoneOfTheTemplatesIsAvailableForTheWorkspace"] = "None of the templates is available for the workspace.";
})(MergeTemplates404ApplicationJsonErrorEnum = exports.MergeTemplates404ApplicationJsonErrorEnum || (exports.MergeTemplates404ApplicationJsonErrorEnum = {}));
var MergeTemplates404ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplates404ApplicationJson, _super);
    function MergeTemplates404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplates404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplates404ApplicationJson.prototype, "status", void 0);
    return MergeTemplates404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MergeTemplates404ApplicationJson = MergeTemplates404ApplicationJson;
var MergeTemplates422ApplicationJsonErrorEnum;
(function (MergeTemplates422ApplicationJsonErrorEnum) {
    MergeTemplates422ApplicationJsonErrorEnum["UnableToParseJsonPleaseCheckFormatting"] = "Unable to parse JSON, please check formatting";
    MergeTemplates422ApplicationJsonErrorEnum["RequiredParameterMissing"] = "Required parameter missing";
    MergeTemplates422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateDefinitionNotDefined"] = "Required parameter missing: template definition not defined";
    MergeTemplates422ApplicationJsonErrorEnum["RequiredParameterMissingTemplateNotDefined"] = "Required parameter missing: template not defined";
})(MergeTemplates422ApplicationJsonErrorEnum = exports.MergeTemplates422ApplicationJsonErrorEnum || (exports.MergeTemplates422ApplicationJsonErrorEnum = {}));
var MergeTemplates422ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplates422ApplicationJson, _super);
    function MergeTemplates422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplates422ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplates422ApplicationJson.prototype, "status", void 0);
    return MergeTemplates422ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MergeTemplates422ApplicationJson = MergeTemplates422ApplicationJson;
var MergeTemplates500ApplicationJson = /** @class */ (function (_super) {
    __extends(MergeTemplates500ApplicationJson, _super);
    function MergeTemplates500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], MergeTemplates500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], MergeTemplates500ApplicationJson.prototype, "status", void 0);
    return MergeTemplates500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MergeTemplates500ApplicationJson = MergeTemplates500ApplicationJson;
var MergeTemplatesRequest = /** @class */ (function (_super) {
    __extends(MergeTemplatesRequest, _super);
    function MergeTemplatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MergeTemplatesQueryParams)
    ], MergeTemplatesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json", elemType: shared.BatchData }),
        __metadata("design:type", Array)
    ], MergeTemplatesRequest.prototype, "request", void 0);
    return MergeTemplatesRequest;
}(utils_1.SpeakeasyBase));
exports.MergeTemplatesRequest = MergeTemplatesRequest;
var MergeTemplatesResponse = /** @class */ (function (_super) {
    __extends(MergeTemplatesResponse, _super);
    function MergeTemplatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MergeTemplatesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MergeTemplatesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MergeTemplates200ApplicationJson)
    ], MergeTemplatesResponse.prototype, "mergeTemplates200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MergeTemplates401ApplicationJson)
    ], MergeTemplatesResponse.prototype, "mergeTemplates401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MergeTemplates403ApplicationJson)
    ], MergeTemplatesResponse.prototype, "mergeTemplates403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MergeTemplates404ApplicationJson)
    ], MergeTemplatesResponse.prototype, "mergeTemplates404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MergeTemplates422ApplicationJson)
    ], MergeTemplatesResponse.prototype, "mergeTemplates422ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MergeTemplates500ApplicationJson)
    ], MergeTemplatesResponse.prototype, "mergeTemplates500ApplicationJSONObject", void 0);
    return MergeTemplatesResponse;
}(utils_1.SpeakeasyBase));
exports.MergeTemplatesResponse = MergeTemplatesResponse;
