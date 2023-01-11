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
exports.GetNetworkPiiPiiKeysResponse = exports.GetNetworkPiiPiiKeysRequest = exports.GetNetworkPiiPiiKeysQueryParams = exports.GetNetworkPiiPiiKeysPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetNetworkPiiPiiKeysPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkPiiPiiKeysPathParams, _super);
    function GetNetworkPiiPiiKeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkPiiPiiKeysPathParams.prototype, "networkId", void 0);
    return GetNetworkPiiPiiKeysPathParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkPiiPiiKeysPathParams = GetNetworkPiiPiiKeysPathParams;
var GetNetworkPiiPiiKeysQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkPiiPiiKeysQueryParams, _super);
    function GetNetworkPiiPiiKeysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=bluetoothMac" }),
        __metadata("design:type", String)
    ], GetNetworkPiiPiiKeysQueryParams.prototype, "bluetoothMac", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], GetNetworkPiiPiiKeysQueryParams.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=imei" }),
        __metadata("design:type", String)
    ], GetNetworkPiiPiiKeysQueryParams.prototype, "imei", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=mac" }),
        __metadata("design:type", String)
    ], GetNetworkPiiPiiKeysQueryParams.prototype, "mac", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=serial" }),
        __metadata("design:type", String)
    ], GetNetworkPiiPiiKeysQueryParams.prototype, "serial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=username" }),
        __metadata("design:type", String)
    ], GetNetworkPiiPiiKeysQueryParams.prototype, "username", void 0);
    return GetNetworkPiiPiiKeysQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkPiiPiiKeysQueryParams = GetNetworkPiiPiiKeysQueryParams;
var GetNetworkPiiPiiKeysRequest = /** @class */ (function (_super) {
    __extends(GetNetworkPiiPiiKeysRequest, _super);
    function GetNetworkPiiPiiKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkPiiPiiKeysPathParams)
    ], GetNetworkPiiPiiKeysRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkPiiPiiKeysQueryParams)
    ], GetNetworkPiiPiiKeysRequest.prototype, "queryParams", void 0);
    return GetNetworkPiiPiiKeysRequest;
}(utils_1.SpeakeasyBase));
exports.GetNetworkPiiPiiKeysRequest = GetNetworkPiiPiiKeysRequest;
var GetNetworkPiiPiiKeysResponse = /** @class */ (function (_super) {
    __extends(GetNetworkPiiPiiKeysResponse, _super);
    function GetNetworkPiiPiiKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNetworkPiiPiiKeysResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNetworkPiiPiiKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkPiiPiiKeysResponse.prototype, "getNetworkPiiPiiKeys200ApplicationJSONObject", void 0);
    return GetNetworkPiiPiiKeysResponse;
}(utils_1.SpeakeasyBase));
exports.GetNetworkPiiPiiKeysResponse = GetNetworkPiiPiiKeysResponse;
