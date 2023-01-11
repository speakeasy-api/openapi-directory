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
exports.GetNetworkWirelessSsidSplashSettingsResponse = exports.GetNetworkWirelessSsidSplashSettingsRequest = exports.GetNetworkWirelessSsidSplashSettingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetNetworkWirelessSsidSplashSettingsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessSsidSplashSettingsPathParams, _super);
    function GetNetworkWirelessSsidSplashSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessSsidSplashSettingsPathParams.prototype, "networkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=number" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessSsidSplashSettingsPathParams.prototype, "number", void 0);
    return GetNetworkWirelessSsidSplashSettingsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessSsidSplashSettingsPathParams = GetNetworkWirelessSsidSplashSettingsPathParams;
var GetNetworkWirelessSsidSplashSettingsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessSsidSplashSettingsRequest, _super);
    function GetNetworkWirelessSsidSplashSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkWirelessSsidSplashSettingsPathParams)
    ], GetNetworkWirelessSsidSplashSettingsRequest.prototype, "pathParams", void 0);
    return GetNetworkWirelessSsidSplashSettingsRequest;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessSsidSplashSettingsRequest = GetNetworkWirelessSsidSplashSettingsRequest;
var GetNetworkWirelessSsidSplashSettingsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessSsidSplashSettingsResponse, _super);
    function GetNetworkWirelessSsidSplashSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNetworkWirelessSsidSplashSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessSsidSplashSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkWirelessSsidSplashSettingsResponse.prototype, "getNetworkWirelessSsidSplashSettings200ApplicationJSONObject", void 0);
    return GetNetworkWirelessSsidSplashSettingsResponse;
}(utils_1.SpeakeasyBase));
exports.GetNetworkWirelessSsidSplashSettingsResponse = GetNetworkWirelessSsidSplashSettingsResponse;
