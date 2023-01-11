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
exports.GetDeviceWirelessRadioSettingsResponse = exports.GetDeviceWirelessRadioSettingsRequest = exports.GetDeviceWirelessRadioSettingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeviceWirelessRadioSettingsPathParams = /** @class */ (function (_super) {
    __extends(GetDeviceWirelessRadioSettingsPathParams, _super);
    function GetDeviceWirelessRadioSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], GetDeviceWirelessRadioSettingsPathParams.prototype, "serial", void 0);
    return GetDeviceWirelessRadioSettingsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetDeviceWirelessRadioSettingsPathParams = GetDeviceWirelessRadioSettingsPathParams;
var GetDeviceWirelessRadioSettingsRequest = /** @class */ (function (_super) {
    __extends(GetDeviceWirelessRadioSettingsRequest, _super);
    function GetDeviceWirelessRadioSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeviceWirelessRadioSettingsPathParams)
    ], GetDeviceWirelessRadioSettingsRequest.prototype, "pathParams", void 0);
    return GetDeviceWirelessRadioSettingsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeviceWirelessRadioSettingsRequest = GetDeviceWirelessRadioSettingsRequest;
var GetDeviceWirelessRadioSettingsResponse = /** @class */ (function (_super) {
    __extends(GetDeviceWirelessRadioSettingsResponse, _super);
    function GetDeviceWirelessRadioSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeviceWirelessRadioSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeviceWirelessRadioSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDeviceWirelessRadioSettingsResponse.prototype, "getDeviceWirelessRadioSettings200ApplicationJSONObject", void 0);
    return GetDeviceWirelessRadioSettingsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeviceWirelessRadioSettingsResponse = GetDeviceWirelessRadioSettingsResponse;
