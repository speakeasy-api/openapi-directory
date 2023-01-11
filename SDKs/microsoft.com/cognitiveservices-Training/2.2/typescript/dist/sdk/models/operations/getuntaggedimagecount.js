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
exports.GetUntaggedImageCountResponse = exports.GetUntaggedImageCountRequest = exports.GetUntaggedImageCountHeaders = exports.GetUntaggedImageCountQueryParams = exports.GetUntaggedImageCountPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetUntaggedImageCountPathParams = /** @class */ (function (_super) {
    __extends(GetUntaggedImageCountPathParams, _super);
    function GetUntaggedImageCountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], GetUntaggedImageCountPathParams.prototype, "projectId", void 0);
    return GetUntaggedImageCountPathParams;
}(utils_1.SpeakeasyBase));
exports.GetUntaggedImageCountPathParams = GetUntaggedImageCountPathParams;
var GetUntaggedImageCountQueryParams = /** @class */ (function (_super) {
    __extends(GetUntaggedImageCountQueryParams, _super);
    function GetUntaggedImageCountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=iterationId" }),
        __metadata("design:type", String)
    ], GetUntaggedImageCountQueryParams.prototype, "iterationId", void 0);
    return GetUntaggedImageCountQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUntaggedImageCountQueryParams = GetUntaggedImageCountQueryParams;
var GetUntaggedImageCountHeaders = /** @class */ (function (_super) {
    __extends(GetUntaggedImageCountHeaders, _super);
    function GetUntaggedImageCountHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], GetUntaggedImageCountHeaders.prototype, "trainingKey", void 0);
    return GetUntaggedImageCountHeaders;
}(utils_1.SpeakeasyBase));
exports.GetUntaggedImageCountHeaders = GetUntaggedImageCountHeaders;
var GetUntaggedImageCountRequest = /** @class */ (function (_super) {
    __extends(GetUntaggedImageCountRequest, _super);
    function GetUntaggedImageCountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUntaggedImageCountPathParams)
    ], GetUntaggedImageCountRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUntaggedImageCountQueryParams)
    ], GetUntaggedImageCountRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUntaggedImageCountHeaders)
    ], GetUntaggedImageCountRequest.prototype, "headers", void 0);
    return GetUntaggedImageCountRequest;
}(utils_1.SpeakeasyBase));
exports.GetUntaggedImageCountRequest = GetUntaggedImageCountRequest;
var GetUntaggedImageCountResponse = /** @class */ (function (_super) {
    __extends(GetUntaggedImageCountResponse, _super);
    function GetUntaggedImageCountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetUntaggedImageCountResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUntaggedImageCountResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUntaggedImageCountResponse.prototype, "getUntaggedImageCount200ApplicationJSONInt32Integer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUntaggedImageCountResponse.prototype, "getUntaggedImageCount200TextJSONInt32Integer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUntaggedImageCountResponse.prototype, "statusCode", void 0);
    return GetUntaggedImageCountResponse;
}(utils_1.SpeakeasyBase));
exports.GetUntaggedImageCountResponse = GetUntaggedImageCountResponse;
