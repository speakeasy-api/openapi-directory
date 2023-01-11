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
exports.LhDeepLinksFfpResponse = exports.LhDeepLinksFfpRequest = exports.LhDeepLinksFfpSecurity = exports.LhDeepLinksFfpHeaders = exports.LhDeepLinksFfpQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var LhDeepLinksFfpQueryParams = /** @class */ (function (_super) {
    __extends(LhDeepLinksFfpQueryParams, _super);
    function LhDeepLinksFfpQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cabin-class" }),
        __metadata("design:type", String)
    ], LhDeepLinksFfpQueryParams.prototype, "cabinClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=catalogues" }),
        __metadata("design:type", String)
    ], LhDeepLinksFfpQueryParams.prototype, "catalogues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], LhDeepLinksFfpQueryParams.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=destination" }),
        __metadata("design:type", String)
    ], LhDeepLinksFfpQueryParams.prototype, "destination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=encryption-key" }),
        __metadata("design:type", String)
    ], LhDeepLinksFfpQueryParams.prototype, "encryptionKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], LhDeepLinksFfpQueryParams.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=origin" }),
        __metadata("design:type", String)
    ], LhDeepLinksFfpQueryParams.prototype, "origin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=partnerid" }),
        __metadata("design:type", String)
    ], LhDeepLinksFfpQueryParams.prototype, "partnerid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=return-date" }),
        __metadata("design:type", String)
    ], LhDeepLinksFfpQueryParams.prototype, "returnDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=trackingid" }),
        __metadata("design:type", String)
    ], LhDeepLinksFfpQueryParams.prototype, "trackingid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=travel-date" }),
        __metadata("design:type", String)
    ], LhDeepLinksFfpQueryParams.prototype, "travelDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=travelers" }),
        __metadata("design:type", String)
    ], LhDeepLinksFfpQueryParams.prototype, "travelers", void 0);
    return LhDeepLinksFfpQueryParams;
}(utils_1.SpeakeasyBase));
exports.LhDeepLinksFfpQueryParams = LhDeepLinksFfpQueryParams;
var LhDeepLinksFfpHeaders = /** @class */ (function (_super) {
    __extends(LhDeepLinksFfpHeaders, _super);
    function LhDeepLinksFfpHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], LhDeepLinksFfpHeaders.prototype, "accept", void 0);
    return LhDeepLinksFfpHeaders;
}(utils_1.SpeakeasyBase));
exports.LhDeepLinksFfpHeaders = LhDeepLinksFfpHeaders;
var LhDeepLinksFfpSecurity = /** @class */ (function (_super) {
    __extends(LhDeepLinksFfpSecurity, _super);
    function LhDeepLinksFfpSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], LhDeepLinksFfpSecurity.prototype, "auth", void 0);
    return LhDeepLinksFfpSecurity;
}(utils_1.SpeakeasyBase));
exports.LhDeepLinksFfpSecurity = LhDeepLinksFfpSecurity;
var LhDeepLinksFfpRequest = /** @class */ (function (_super) {
    __extends(LhDeepLinksFfpRequest, _super);
    function LhDeepLinksFfpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LhDeepLinksFfpQueryParams)
    ], LhDeepLinksFfpRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LhDeepLinksFfpHeaders)
    ], LhDeepLinksFfpRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LhDeepLinksFfpSecurity)
    ], LhDeepLinksFfpRequest.prototype, "security", void 0);
    return LhDeepLinksFfpRequest;
}(utils_1.SpeakeasyBase));
exports.LhDeepLinksFfpRequest = LhDeepLinksFfpRequest;
var LhDeepLinksFfpResponse = /** @class */ (function (_super) {
    __extends(LhDeepLinksFfpResponse, _super);
    function LhDeepLinksFfpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LhDeepLinksFfpResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LhDeepLinksFfpResponse.prototype, "lhDeepLinksFFP200ApplicationJSONString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], LhDeepLinksFfpResponse.prototype, "statusCode", void 0);
    return LhDeepLinksFfpResponse;
}(utils_1.SpeakeasyBase));
exports.LhDeepLinksFfpResponse = LhDeepLinksFfpResponse;
