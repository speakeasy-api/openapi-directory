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
exports.GetSigningBasketAuthorisationResponse = exports.GetSigningBasketAuthorisationRequest = exports.GetSigningBasketAuthorisationSecurity = exports.GetSigningBasketAuthorisationHeaders = exports.GetSigningBasketAuthorisationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSigningBasketAuthorisationPathParams = /** @class */ (function (_super) {
    __extends(GetSigningBasketAuthorisationPathParams, _super);
    function GetSigningBasketAuthorisationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=basketId" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationPathParams.prototype, "basketId", void 0);
    return GetSigningBasketAuthorisationPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSigningBasketAuthorisationPathParams = GetSigningBasketAuthorisationPathParams;
var GetSigningBasketAuthorisationHeaders = /** @class */ (function (_super) {
    __extends(GetSigningBasketAuthorisationHeaders, _super);
    function GetSigningBasketAuthorisationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "digest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuAccept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuDeviceID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuIPAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuIPPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationHeaders.prototype, "xRequestID", void 0);
    return GetSigningBasketAuthorisationHeaders;
}(utils_1.SpeakeasyBase));
exports.GetSigningBasketAuthorisationHeaders = GetSigningBasketAuthorisationHeaders;
var GetSigningBasketAuthorisationSecurity = /** @class */ (function (_super) {
    __extends(GetSigningBasketAuthorisationSecurity, _super);
    function GetSigningBasketAuthorisationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], GetSigningBasketAuthorisationSecurity.prototype, "bearerAuthOAuth", void 0);
    return GetSigningBasketAuthorisationSecurity;
}(utils_1.SpeakeasyBase));
exports.GetSigningBasketAuthorisationSecurity = GetSigningBasketAuthorisationSecurity;
var GetSigningBasketAuthorisationRequest = /** @class */ (function (_super) {
    __extends(GetSigningBasketAuthorisationRequest, _super);
    function GetSigningBasketAuthorisationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSigningBasketAuthorisationPathParams)
    ], GetSigningBasketAuthorisationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSigningBasketAuthorisationHeaders)
    ], GetSigningBasketAuthorisationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSigningBasketAuthorisationSecurity)
    ], GetSigningBasketAuthorisationRequest.prototype, "security", void 0);
    return GetSigningBasketAuthorisationRequest;
}(utils_1.SpeakeasyBase));
exports.GetSigningBasketAuthorisationRequest = GetSigningBasketAuthorisationRequest;
var GetSigningBasketAuthorisationResponse = /** @class */ (function (_super) {
    __extends(GetSigningBasketAuthorisationResponse, _super);
    function GetSigningBasketAuthorisationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSigningBasketAuthorisationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400NgSbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error400NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400Sbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error400SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401NgSbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error401NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401Sbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error401SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403NgSbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error403NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403Sbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error403SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404NgSbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error404NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404Sbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error404SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405NgSbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error405NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405Sbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error405SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409NgSbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error409NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409Sbs)
    ], GetSigningBasketAuthorisationResponse.prototype, "error409SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSigningBasketAuthorisationResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSigningBasketAuthorisationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Authorisations)
    ], GetSigningBasketAuthorisationResponse.prototype, "authorisations", void 0);
    return GetSigningBasketAuthorisationResponse;
}(utils_1.SpeakeasyBase));
exports.GetSigningBasketAuthorisationResponse = GetSigningBasketAuthorisationResponse;
