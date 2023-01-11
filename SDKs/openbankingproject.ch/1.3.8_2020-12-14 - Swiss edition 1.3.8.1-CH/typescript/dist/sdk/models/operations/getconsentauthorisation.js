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
exports.GetConsentAuthorisationResponse = exports.GetConsentAuthorisationRequest = exports.GetConsentAuthorisationSecurity = exports.GetConsentAuthorisationHeaders = exports.GetConsentAuthorisationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetConsentAuthorisationPathParams = /** @class */ (function (_super) {
    __extends(GetConsentAuthorisationPathParams, _super);
    function GetConsentAuthorisationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=consentId" }),
        __metadata("design:type", String)
    ], GetConsentAuthorisationPathParams.prototype, "consentId", void 0);
    return GetConsentAuthorisationPathParams;
}(utils_1.SpeakeasyBase));
exports.GetConsentAuthorisationPathParams = GetConsentAuthorisationPathParams;
var GetConsentAuthorisationHeaders = /** @class */ (function (_super) {
    __extends(GetConsentAuthorisationHeaders, _super);
    function GetConsentAuthorisationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], GetConsentAuthorisationHeaders.prototype, "digest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], GetConsentAuthorisationHeaders.prototype, "psuAccept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], GetConsentAuthorisationHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], GetConsentAuthorisationHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], GetConsentAuthorisationHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], GetConsentAuthorisationHeaders.prototype, "psuDeviceID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], GetConsentAuthorisationHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], GetConsentAuthorisationHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], GetConsentAuthorisationHeaders.prototype, "psuIPAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], GetConsentAuthorisationHeaders.prototype, "psuIPPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], GetConsentAuthorisationHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], GetConsentAuthorisationHeaders.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], GetConsentAuthorisationHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], GetConsentAuthorisationHeaders.prototype, "xRequestID", void 0);
    return GetConsentAuthorisationHeaders;
}(utils_1.SpeakeasyBase));
exports.GetConsentAuthorisationHeaders = GetConsentAuthorisationHeaders;
var GetConsentAuthorisationSecurity = /** @class */ (function (_super) {
    __extends(GetConsentAuthorisationSecurity, _super);
    function GetConsentAuthorisationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], GetConsentAuthorisationSecurity.prototype, "bearerAuthOAuth", void 0);
    return GetConsentAuthorisationSecurity;
}(utils_1.SpeakeasyBase));
exports.GetConsentAuthorisationSecurity = GetConsentAuthorisationSecurity;
var GetConsentAuthorisationRequest = /** @class */ (function (_super) {
    __extends(GetConsentAuthorisationRequest, _super);
    function GetConsentAuthorisationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetConsentAuthorisationPathParams)
    ], GetConsentAuthorisationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetConsentAuthorisationHeaders)
    ], GetConsentAuthorisationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetConsentAuthorisationSecurity)
    ], GetConsentAuthorisationRequest.prototype, "security", void 0);
    return GetConsentAuthorisationRequest;
}(utils_1.SpeakeasyBase));
exports.GetConsentAuthorisationRequest = GetConsentAuthorisationRequest;
var GetConsentAuthorisationResponse = /** @class */ (function (_super) {
    __extends(GetConsentAuthorisationResponse, _super);
    function GetConsentAuthorisationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetConsentAuthorisationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400Ais)
    ], GetConsentAuthorisationResponse.prototype, "error400AIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400NgAis)
    ], GetConsentAuthorisationResponse.prototype, "error400NGAIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401Ais)
    ], GetConsentAuthorisationResponse.prototype, "error401AIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401NgAis)
    ], GetConsentAuthorisationResponse.prototype, "error401NGAIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403Ais)
    ], GetConsentAuthorisationResponse.prototype, "error403AIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403NgAis)
    ], GetConsentAuthorisationResponse.prototype, "error403NGAIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404Ais)
    ], GetConsentAuthorisationResponse.prototype, "error404AIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404NgAis)
    ], GetConsentAuthorisationResponse.prototype, "error404NGAIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405Ais)
    ], GetConsentAuthorisationResponse.prototype, "error405AIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405NgAis)
    ], GetConsentAuthorisationResponse.prototype, "error405NGAIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error406Ais)
    ], GetConsentAuthorisationResponse.prototype, "error406AIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error406NgAis)
    ], GetConsentAuthorisationResponse.prototype, "error406NGAIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409Ais)
    ], GetConsentAuthorisationResponse.prototype, "error409AIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409NgAis)
    ], GetConsentAuthorisationResponse.prototype, "error409NGAIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error429Ais)
    ], GetConsentAuthorisationResponse.prototype, "error429AIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error429NgAis)
    ], GetConsentAuthorisationResponse.prototype, "error429NGAIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetConsentAuthorisationResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetConsentAuthorisationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Authorisations)
    ], GetConsentAuthorisationResponse.prototype, "authorisations", void 0);
    return GetConsentAuthorisationResponse;
}(utils_1.SpeakeasyBase));
exports.GetConsentAuthorisationResponse = GetConsentAuthorisationResponse;
