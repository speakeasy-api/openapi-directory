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
exports.StartPaymentInitiationCancellationAuthorisationResponse = exports.StartPaymentInitiationCancellationAuthorisationRequest = exports.StartPaymentInitiationCancellationAuthorisationSecurity = exports.StartPaymentInitiationCancellationAuthorisationHeaders = exports.StartPaymentInitiationCancellationAuthorisationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var StartPaymentInitiationCancellationAuthorisationPathParams = /** @class */ (function (_super) {
    __extends(StartPaymentInitiationCancellationAuthorisationPathParams, _super);
    function StartPaymentInitiationCancellationAuthorisationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=payment-product" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationPathParams.prototype, "paymentProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=payment-service" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationPathParams.prototype, "paymentService", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=paymentId" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationPathParams.prototype, "paymentId", void 0);
    return StartPaymentInitiationCancellationAuthorisationPathParams;
}(utils_1.SpeakeasyBase));
exports.StartPaymentInitiationCancellationAuthorisationPathParams = StartPaymentInitiationCancellationAuthorisationPathParams;
var StartPaymentInitiationCancellationAuthorisationHeaders = /** @class */ (function (_super) {
    __extends(StartPaymentInitiationCancellationAuthorisationHeaders, _super);
    function StartPaymentInitiationCancellationAuthorisationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "digest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuAccept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuCorporateID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID-Type" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuCorporateIDType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuDeviceID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-ID" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-ID-Type" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuIDType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuIPAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuIPPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Nok-Redirect-URI" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "tppNokRedirectURI", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Notification-Content-Preferred" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "tppNotificationContentPreferred", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Notification-URI" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "tppNotificationURI", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Redirect-Preferred" }),
        __metadata("design:type", Boolean)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "tppRedirectPreferred", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Redirect-URI" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "tppRedirectURI", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationHeaders.prototype, "xRequestID", void 0);
    return StartPaymentInitiationCancellationAuthorisationHeaders;
}(utils_1.SpeakeasyBase));
exports.StartPaymentInitiationCancellationAuthorisationHeaders = StartPaymentInitiationCancellationAuthorisationHeaders;
var StartPaymentInitiationCancellationAuthorisationSecurity = /** @class */ (function (_super) {
    __extends(StartPaymentInitiationCancellationAuthorisationSecurity, _super);
    function StartPaymentInitiationCancellationAuthorisationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], StartPaymentInitiationCancellationAuthorisationSecurity.prototype, "bearerAuthOAuth", void 0);
    return StartPaymentInitiationCancellationAuthorisationSecurity;
}(utils_1.SpeakeasyBase));
exports.StartPaymentInitiationCancellationAuthorisationSecurity = StartPaymentInitiationCancellationAuthorisationSecurity;
var StartPaymentInitiationCancellationAuthorisationRequest = /** @class */ (function (_super) {
    __extends(StartPaymentInitiationCancellationAuthorisationRequest, _super);
    function StartPaymentInitiationCancellationAuthorisationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StartPaymentInitiationCancellationAuthorisationPathParams)
    ], StartPaymentInitiationCancellationAuthorisationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StartPaymentInitiationCancellationAuthorisationHeaders)
    ], StartPaymentInitiationCancellationAuthorisationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], StartPaymentInitiationCancellationAuthorisationRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StartPaymentInitiationCancellationAuthorisationSecurity)
    ], StartPaymentInitiationCancellationAuthorisationRequest.prototype, "security", void 0);
    return StartPaymentInitiationCancellationAuthorisationRequest;
}(utils_1.SpeakeasyBase));
exports.StartPaymentInitiationCancellationAuthorisationRequest = StartPaymentInitiationCancellationAuthorisationRequest;
var StartPaymentInitiationCancellationAuthorisationResponse = /** @class */ (function (_super) {
    __extends(StartPaymentInitiationCancellationAuthorisationResponse, _super);
    function StartPaymentInitiationCancellationAuthorisationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400NgPis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error400NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400Pis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error400PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401NgPis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error401NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401Pis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error401PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403NgPis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error403NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403Pis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error403PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404NgPis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error404NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404Pis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error404PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405NgPis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error405NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405Pis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error405PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409NgPis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error409NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409Pis)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "error409PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.StartScaprocessResponse)
    ], StartPaymentInitiationCancellationAuthorisationResponse.prototype, "startScaprocessResponse", void 0);
    return StartPaymentInitiationCancellationAuthorisationResponse;
}(utils_1.SpeakeasyBase));
exports.StartPaymentInitiationCancellationAuthorisationResponse = StartPaymentInitiationCancellationAuthorisationResponse;
