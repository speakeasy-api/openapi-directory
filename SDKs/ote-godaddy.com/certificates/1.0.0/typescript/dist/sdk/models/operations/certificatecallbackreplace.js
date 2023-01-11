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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateCallbackReplaceResponse = exports.CertificateCallbackReplaceRequest = exports.CertificateCallbackReplaceQueryParams = exports.CertificateCallbackReplacePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var CertificateCallbackReplacePathParams = /** @class */ (function (_super) {
    __extends(CertificateCallbackReplacePathParams, _super);
    function CertificateCallbackReplacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=certificateId" }),
        __metadata("design:type", String)
    ], CertificateCallbackReplacePathParams.prototype, "certificateId", void 0);
    return CertificateCallbackReplacePathParams;
}(utils_1.SpeakeasyBase));
exports.CertificateCallbackReplacePathParams = CertificateCallbackReplacePathParams;
var CertificateCallbackReplaceQueryParams = /** @class */ (function (_super) {
    __extends(CertificateCallbackReplaceQueryParams, _super);
    function CertificateCallbackReplaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callbackUrl" }),
        __metadata("design:type", String)
    ], CertificateCallbackReplaceQueryParams.prototype, "callbackUrl", void 0);
    return CertificateCallbackReplaceQueryParams;
}(utils_1.SpeakeasyBase));
exports.CertificateCallbackReplaceQueryParams = CertificateCallbackReplaceQueryParams;
var CertificateCallbackReplaceRequest = /** @class */ (function (_super) {
    __extends(CertificateCallbackReplaceRequest, _super);
    function CertificateCallbackReplaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CertificateCallbackReplacePathParams)
    ], CertificateCallbackReplaceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CertificateCallbackReplaceQueryParams)
    ], CertificateCallbackReplaceRequest.prototype, "queryParams", void 0);
    return CertificateCallbackReplaceRequest;
}(utils_1.SpeakeasyBase));
exports.CertificateCallbackReplaceRequest = CertificateCallbackReplaceRequest;
var CertificateCallbackReplaceResponse = /** @class */ (function (_super) {
    __extends(CertificateCallbackReplaceResponse, _super);
    function CertificateCallbackReplaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CertificateCallbackReplaceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CertificateCallbackReplaceResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CertificateCallbackReplaceResponse.prototype, "statusCode", void 0);
    return CertificateCallbackReplaceResponse;
}(utils_1.SpeakeasyBase));
exports.CertificateCallbackReplaceResponse = CertificateCallbackReplaceResponse;
