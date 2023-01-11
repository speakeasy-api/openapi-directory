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
exports.LhDeepLinksItcoResponse = exports.LhDeepLinksItcoRequest = exports.LhDeepLinksItcoSecurity = exports.LhDeepLinksItcoHeaders = exports.LhDeepLinksItcoQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var LhDeepLinksItcoQueryParams = /** @class */ (function (_super) {
    __extends(LhDeepLinksItcoQueryParams, _super);
    function LhDeepLinksItcoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cabin-class" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "cabinClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=catalogues" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "catalogues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=destination" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "destination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=encryption-key" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "encryptionKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fare" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "fare", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fare-currency" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "fareCurrency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=net-fare" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "netFare", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=origin" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "origin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=outbound-segments" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "outboundSegments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=partnerid" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "partnerid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=return-date" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "returnDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=return-segments" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "returnSegments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=trackingid" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "trackingid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=travel-date" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "travelDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=travelers" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "travelers", void 0);
    return LhDeepLinksItcoQueryParams;
}(utils_1.SpeakeasyBase));
exports.LhDeepLinksItcoQueryParams = LhDeepLinksItcoQueryParams;
var LhDeepLinksItcoHeaders = /** @class */ (function (_super) {
    __extends(LhDeepLinksItcoHeaders, _super);
    function LhDeepLinksItcoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoHeaders.prototype, "accept", void 0);
    return LhDeepLinksItcoHeaders;
}(utils_1.SpeakeasyBase));
exports.LhDeepLinksItcoHeaders = LhDeepLinksItcoHeaders;
var LhDeepLinksItcoSecurity = /** @class */ (function (_super) {
    __extends(LhDeepLinksItcoSecurity, _super);
    function LhDeepLinksItcoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], LhDeepLinksItcoSecurity.prototype, "auth", void 0);
    return LhDeepLinksItcoSecurity;
}(utils_1.SpeakeasyBase));
exports.LhDeepLinksItcoSecurity = LhDeepLinksItcoSecurity;
var LhDeepLinksItcoRequest = /** @class */ (function (_super) {
    __extends(LhDeepLinksItcoRequest, _super);
    function LhDeepLinksItcoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LhDeepLinksItcoQueryParams)
    ], LhDeepLinksItcoRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LhDeepLinksItcoHeaders)
    ], LhDeepLinksItcoRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LhDeepLinksItcoSecurity)
    ], LhDeepLinksItcoRequest.prototype, "security", void 0);
    return LhDeepLinksItcoRequest;
}(utils_1.SpeakeasyBase));
exports.LhDeepLinksItcoRequest = LhDeepLinksItcoRequest;
var LhDeepLinksItcoResponse = /** @class */ (function (_super) {
    __extends(LhDeepLinksItcoResponse, _super);
    function LhDeepLinksItcoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LhDeepLinksItcoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LhDeepLinksItcoResponse.prototype, "lhDeepLinksITCO200ApplicationJSONString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], LhDeepLinksItcoResponse.prototype, "statusCode", void 0);
    return LhDeepLinksItcoResponse;
}(utils_1.SpeakeasyBase));
exports.LhDeepLinksItcoResponse = LhDeepLinksItcoResponse;
