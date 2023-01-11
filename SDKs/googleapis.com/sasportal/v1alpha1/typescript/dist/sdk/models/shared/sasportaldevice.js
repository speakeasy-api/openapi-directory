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
exports.SasPortalDevice = exports.SasPortalDeviceInput = exports.SasPortalDeviceStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var sasportaldeviceconfig_1 = require("./sasportaldeviceconfig");
var sasportaldevicemetadata_1 = require("./sasportaldevicemetadata");
var sasportalfrequencyrange_1 = require("./sasportalfrequencyrange");
var sasportaldevicegrant_1 = require("./sasportaldevicegrant");
var sasportalchannelwithscore_1 = require("./sasportalchannelwithscore");
var sasportaldevicemetadata_2 = require("./sasportaldevicemetadata");
var SasPortalDeviceStateEnum;
(function (SasPortalDeviceStateEnum) {
    SasPortalDeviceStateEnum["DeviceStateUnspecified"] = "DEVICE_STATE_UNSPECIFIED";
    SasPortalDeviceStateEnum["Reserved"] = "RESERVED";
    SasPortalDeviceStateEnum["Registered"] = "REGISTERED";
    SasPortalDeviceStateEnum["Deregistered"] = "DEREGISTERED";
})(SasPortalDeviceStateEnum = exports.SasPortalDeviceStateEnum || (exports.SasPortalDeviceStateEnum = {}));
var SasPortalDeviceInput = /** @class */ (function (_super) {
    __extends(SasPortalDeviceInput, _super);
    function SasPortalDeviceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activeConfig" }),
        __metadata("design:type", sasportaldeviceconfig_1.SasPortalDeviceConfig)
    ], SasPortalDeviceInput.prototype, "activeConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deviceMetadata" }),
        __metadata("design:type", sasportaldevicemetadata_1.SasPortalDeviceMetadataInput)
    ], SasPortalDeviceInput.prototype, "deviceMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], SasPortalDeviceInput.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fccId" }),
        __metadata("design:type", String)
    ], SasPortalDeviceInput.prototype, "fccId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=grantRangeAllowlists", elemType: sasportalfrequencyrange_1.SasPortalFrequencyRange }),
        __metadata("design:type", Array)
    ], SasPortalDeviceInput.prototype, "grantRangeAllowlists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=grants", elemType: sasportaldevicegrant_1.SasPortalDeviceGrant }),
        __metadata("design:type", Array)
    ], SasPortalDeviceInput.prototype, "grants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SasPortalDeviceInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preloadedConfig" }),
        __metadata("design:type", sasportaldeviceconfig_1.SasPortalDeviceConfig)
    ], SasPortalDeviceInput.prototype, "preloadedConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], SasPortalDeviceInput.prototype, "serialNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], SasPortalDeviceInput.prototype, "state", void 0);
    return SasPortalDeviceInput;
}(utils_1.SpeakeasyBase));
exports.SasPortalDeviceInput = SasPortalDeviceInput;
var SasPortalDevice = /** @class */ (function (_super) {
    __extends(SasPortalDevice, _super);
    function SasPortalDevice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activeConfig" }),
        __metadata("design:type", sasportaldeviceconfig_1.SasPortalDeviceConfig)
    ], SasPortalDevice.prototype, "activeConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentChannels", elemType: sasportalchannelwithscore_1.SasPortalChannelWithScore }),
        __metadata("design:type", Array)
    ], SasPortalDevice.prototype, "currentChannels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deviceMetadata" }),
        __metadata("design:type", sasportaldevicemetadata_2.SasPortalDeviceMetadata)
    ], SasPortalDevice.prototype, "deviceMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], SasPortalDevice.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fccId" }),
        __metadata("design:type", String)
    ], SasPortalDevice.prototype, "fccId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=grantRangeAllowlists", elemType: sasportalfrequencyrange_1.SasPortalFrequencyRange }),
        __metadata("design:type", Array)
    ], SasPortalDevice.prototype, "grantRangeAllowlists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=grants", elemType: sasportaldevicegrant_1.SasPortalDeviceGrant }),
        __metadata("design:type", Array)
    ], SasPortalDevice.prototype, "grants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SasPortalDevice.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preloadedConfig" }),
        __metadata("design:type", sasportaldeviceconfig_1.SasPortalDeviceConfig)
    ], SasPortalDevice.prototype, "preloadedConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], SasPortalDevice.prototype, "serialNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], SasPortalDevice.prototype, "state", void 0);
    return SasPortalDevice;
}(utils_1.SpeakeasyBase));
exports.SasPortalDevice = SasPortalDevice;
