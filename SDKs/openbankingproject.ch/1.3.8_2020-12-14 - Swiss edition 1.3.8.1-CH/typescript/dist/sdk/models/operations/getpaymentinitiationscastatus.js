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
exports.GetPaymentInitiationScaStatusResponse = exports.GetPaymentInitiationScaStatusRequest = exports.GetPaymentInitiationScaStatusSecurity = exports.GetPaymentInitiationScaStatusHeaders = exports.GetPaymentInitiationScaStatusPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPaymentInitiationScaStatusPathParams = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationScaStatusPathParams, _super);
    function GetPaymentInitiationScaStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=authorisationId" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusPathParams.prototype, "authorisationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=payment-product" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusPathParams.prototype, "paymentProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=payment-service" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusPathParams.prototype, "paymentService", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=paymentId" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusPathParams.prototype, "paymentId", void 0);
    return GetPaymentInitiationScaStatusPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPaymentInitiationScaStatusPathParams = GetPaymentInitiationScaStatusPathParams;
var GetPaymentInitiationScaStatusHeaders = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationScaStatusHeaders, _super);
    function GetPaymentInitiationScaStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusHeaders.prototype, "digest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusHeaders.prototype, "psuAccept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusHeaders.prototype, "psuDeviceID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusHeaders.prototype, "psuIPAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusHeaders.prototype, "psuIPPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusHeaders.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusHeaders.prototype, "xRequestID", void 0);
    return GetPaymentInitiationScaStatusHeaders;
}(utils_1.SpeakeasyBase));
exports.GetPaymentInitiationScaStatusHeaders = GetPaymentInitiationScaStatusHeaders;
var GetPaymentInitiationScaStatusSecurity = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationScaStatusSecurity, _super);
    function GetPaymentInitiationScaStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], GetPaymentInitiationScaStatusSecurity.prototype, "bearerAuthOAuth", void 0);
    return GetPaymentInitiationScaStatusSecurity;
}(utils_1.SpeakeasyBase));
exports.GetPaymentInitiationScaStatusSecurity = GetPaymentInitiationScaStatusSecurity;
var GetPaymentInitiationScaStatusRequest = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationScaStatusRequest, _super);
    function GetPaymentInitiationScaStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentInitiationScaStatusPathParams)
    ], GetPaymentInitiationScaStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentInitiationScaStatusHeaders)
    ], GetPaymentInitiationScaStatusRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentInitiationScaStatusSecurity)
    ], GetPaymentInitiationScaStatusRequest.prototype, "security", void 0);
    return GetPaymentInitiationScaStatusRequest;
}(utils_1.SpeakeasyBase));
exports.GetPaymentInitiationScaStatusRequest = GetPaymentInitiationScaStatusRequest;
var GetPaymentInitiationScaStatusResponse = /** @class */ (function (_super) {
    __extends(GetPaymentInitiationScaStatusResponse, _super);
    function GetPaymentInitiationScaStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPaymentInitiationScaStatusResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400NgPis)
    ], GetPaymentInitiationScaStatusResponse.prototype, "error400NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400Pis)
    ], GetPaymentInitiationScaStatusResponse.prototype, "error400PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401NgPis)
    ], GetPaymentInitiationScaStatusResponse.prototype, "error401NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401Pis)
    ], GetPaymentInitiationScaStatusResponse.prototype, "error401PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403NgPis)
    ], GetPaymentInitiationScaStatusResponse.prototype, "error403NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403Pis)
    ], GetPaymentInitiationScaStatusResponse.prototype, "error403PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404NgPis)
    ], GetPaymentInitiationScaStatusResponse.prototype, "error404NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404Pis)
    ], GetPaymentInitiationScaStatusResponse.prototype, "error404PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405NgPis)
    ], GetPaymentInitiationScaStatusResponse.prototype, "error405NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405Pis)
    ], GetPaymentInitiationScaStatusResponse.prototype, "error405PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409NgPis)
    ], GetPaymentInitiationScaStatusResponse.prototype, "error409NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409Pis)
    ], GetPaymentInitiationScaStatusResponse.prototype, "error409PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPaymentInitiationScaStatusResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPaymentInitiationScaStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ScaStatusResponse)
    ], GetPaymentInitiationScaStatusResponse.prototype, "scaStatusResponse", void 0);
    return GetPaymentInitiationScaStatusResponse;
}(utils_1.SpeakeasyBase));
exports.GetPaymentInitiationScaStatusResponse = GetPaymentInitiationScaStatusResponse;
