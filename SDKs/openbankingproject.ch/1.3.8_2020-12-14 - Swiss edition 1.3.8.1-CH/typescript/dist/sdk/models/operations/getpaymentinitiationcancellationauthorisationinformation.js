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
exports.GetPaymentInitiationCancellationAuthorisationInformationResponse = exports.GetPaymentInitiationCancellationAuthorisationInformationRequest = exports.GetPaymentInitiationCancellationAuthorisationInformationSecurity = exports.GetPaymentInitiationCancellationAuthorisationInformationHeaders = exports.GetPaymentInitiationCancellationAuthorisationInformationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPaymentInitiationCancellationAuthorisationInformationPathParams = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationCancellationAuthorisationInformationPathParams, _super);
    function GetPaymentInitiationCancellationAuthorisationInformationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=payment-product" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationPathParams.prototype, "paymentProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=payment-service" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationPathParams.prototype, "paymentService", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=paymentId" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationPathParams.prototype, "paymentId", void 0);
    return GetPaymentInitiationCancellationAuthorisationInformationPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPaymentInitiationCancellationAuthorisationInformationPathParams = GetPaymentInitiationCancellationAuthorisationInformationPathParams;
var GetPaymentInitiationCancellationAuthorisationInformationHeaders = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationCancellationAuthorisationInformationHeaders, _super);
    function GetPaymentInitiationCancellationAuthorisationInformationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "digest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuAccept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuDeviceID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuIPAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuIPPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationHeaders.prototype, "xRequestID", void 0);
    return GetPaymentInitiationCancellationAuthorisationInformationHeaders;
}(utils_1.SpeakeasyBase));
exports.GetPaymentInitiationCancellationAuthorisationInformationHeaders = GetPaymentInitiationCancellationAuthorisationInformationHeaders;
var GetPaymentInitiationCancellationAuthorisationInformationSecurity = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationCancellationAuthorisationInformationSecurity, _super);
    function GetPaymentInitiationCancellationAuthorisationInformationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], GetPaymentInitiationCancellationAuthorisationInformationSecurity.prototype, "bearerAuthOAuth", void 0);
    return GetPaymentInitiationCancellationAuthorisationInformationSecurity;
}(utils_1.SpeakeasyBase));
exports.GetPaymentInitiationCancellationAuthorisationInformationSecurity = GetPaymentInitiationCancellationAuthorisationInformationSecurity;
var GetPaymentInitiationCancellationAuthorisationInformationRequest = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationCancellationAuthorisationInformationRequest, _super);
    function GetPaymentInitiationCancellationAuthorisationInformationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentInitiationCancellationAuthorisationInformationPathParams)
    ], GetPaymentInitiationCancellationAuthorisationInformationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentInitiationCancellationAuthorisationInformationHeaders)
    ], GetPaymentInitiationCancellationAuthorisationInformationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentInitiationCancellationAuthorisationInformationSecurity)
    ], GetPaymentInitiationCancellationAuthorisationInformationRequest.prototype, "security", void 0);
    return GetPaymentInitiationCancellationAuthorisationInformationRequest;
}(utils_1.SpeakeasyBase));
exports.GetPaymentInitiationCancellationAuthorisationInformationRequest = GetPaymentInitiationCancellationAuthorisationInformationRequest;
var GetPaymentInitiationCancellationAuthorisationInformationResponse = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationCancellationAuthorisationInformationResponse, _super);
    function GetPaymentInitiationCancellationAuthorisationInformationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400NgPis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error400NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400Pis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error400PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401NgPis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error401NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401Pis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error401PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403NgPis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error403NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403Pis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error403PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404NgPis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error404NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404Pis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error404PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405NgPis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error405NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405Pis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error405PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409NgPis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error409NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409Pis)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "error409PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Authorisations)
    ], GetPaymentInitiationCancellationAuthorisationInformationResponse.prototype, "authorisations", void 0);
    return GetPaymentInitiationCancellationAuthorisationInformationResponse;
}(utils_1.SpeakeasyBase));
exports.GetPaymentInitiationCancellationAuthorisationInformationResponse = GetPaymentInitiationCancellationAuthorisationInformationResponse;
