"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.GetOrganizationFirmwareUpgradesByDeviceResponse = exports.GetOrganizationFirmwareUpgradesByDevice200ApplicationJSON = exports.GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade = exports.GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeToVersion = exports.GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStaged = exports.GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStagedGroup = exports.GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeFromVersion = exports.GetOrganizationFirmwareUpgradesByDeviceRequest = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var GetOrganizationFirmwareUpgradesByDeviceRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationFirmwareUpgradesByDeviceRequest, _super);
    function GetOrganizationFirmwareUpgradesByDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=endingBefore",
        }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDeviceRequest.prototype, "endingBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=false;name=firmwareUpgradeBatchIds",
        }),
        __metadata("design:type", Array)
    ], GetOrganizationFirmwareUpgradesByDeviceRequest.prototype, "firmwareUpgradeBatchIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=false;name=firmwareUpgradeIds",
        }),
        __metadata("design:type", Array)
    ], GetOrganizationFirmwareUpgradesByDeviceRequest.prototype, "firmwareUpgradeIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=macs" }),
        __metadata("design:type", Array)
    ], GetOrganizationFirmwareUpgradesByDeviceRequest.prototype, "macs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=false;name=networkIds",
        }),
        __metadata("design:type", Array)
    ], GetOrganizationFirmwareUpgradesByDeviceRequest.prototype, "networkIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=organizationId",
        }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDeviceRequest.prototype, "organizationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=perPage",
        }),
        __metadata("design:type", Number)
    ], GetOrganizationFirmwareUpgradesByDeviceRequest.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=false;name=serials",
        }),
        __metadata("design:type", Array)
    ], GetOrganizationFirmwareUpgradesByDeviceRequest.prototype, "serials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=startingAfter",
        }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDeviceRequest.prototype, "startingAfter", void 0);
    return GetOrganizationFirmwareUpgradesByDeviceRequest;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationFirmwareUpgradesByDeviceRequest = GetOrganizationFirmwareUpgradesByDeviceRequest;
/**
 * The initial version of the device
 */
var GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeFromVersion = /** @class */ (function (_super) {
    __extends(GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeFromVersion, _super);
    function GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeFromVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeFromVersion.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "releaseDate" }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeFromVersion.prototype, "releaseDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "releaseType" }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeFromVersion.prototype, "releaseType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "shortName" }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeFromVersion.prototype, "shortName", void 0);
    return GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeFromVersion;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeFromVersion = GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeFromVersion;
/**
 * The staged upgrade group
 */
var GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStagedGroup = /** @class */ (function (_super) {
    __extends(GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStagedGroup, _super);
    function GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStagedGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStagedGroup.prototype, "id", void 0);
    return GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStagedGroup;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStagedGroup = GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStagedGroup;
/**
 * Staged upgrade
 */
var GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStaged = /** @class */ (function (_super) {
    __extends(GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStaged, _super);
    function GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStaged() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "group" }),
        (0, class_transformer_1.Type)(function () {
            return GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStagedGroup;
        }),
        __metadata("design:type", GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStagedGroup)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStaged.prototype, "group", void 0);
    return GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStaged;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStaged = GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStaged;
/**
 * Version the device is upgrading to
 */
var GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeToVersion = /** @class */ (function (_super) {
    __extends(GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeToVersion, _super);
    function GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeToVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeToVersion.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "releaseDate" }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeToVersion.prototype, "releaseDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "releaseType" }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeToVersion.prototype, "releaseType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "shortName" }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeToVersion.prototype, "shortName", void 0);
    return GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeToVersion;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeToVersion = GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeToVersion;
/**
 * The devices upgrade details and status
 */
var GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade = /** @class */ (function (_super) {
    __extends(GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade, _super);
    function GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "fromVersion" }),
        (0, class_transformer_1.Type)(function () {
            return GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeFromVersion;
        }),
        __metadata("design:type", GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeFromVersion)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade.prototype, "fromVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "staged" }),
        (0, class_transformer_1.Type)(function () { return GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStaged; }),
        __metadata("design:type", GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeStaged)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade.prototype, "staged", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "time" }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade.prototype, "time", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "toVersion" }),
        (0, class_transformer_1.Type)(function () {
            return GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeToVersion;
        }),
        __metadata("design:type", GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgradeToVersion)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade.prototype, "toVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "upgradeBatchId" }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade.prototype, "upgradeBatchId", void 0);
    return GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade = GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade;
var GetOrganizationFirmwareUpgradesByDevice200ApplicationJSON = /** @class */ (function (_super) {
    __extends(GetOrganizationFirmwareUpgradesByDevice200ApplicationJSON, _super);
    function GetOrganizationFirmwareUpgradesByDevice200ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "deviceStatus" }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSON.prototype, "deviceStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSON.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "serial" }),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSON.prototype, "serial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "upgrade" }),
        (0, class_transformer_1.Type)(function () { return GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade; }),
        __metadata("design:type", GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONUpgrade)
    ], GetOrganizationFirmwareUpgradesByDevice200ApplicationJSON.prototype, "upgrade", void 0);
    return GetOrganizationFirmwareUpgradesByDevice200ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationFirmwareUpgradesByDevice200ApplicationJSON = GetOrganizationFirmwareUpgradesByDevice200ApplicationJSON;
var GetOrganizationFirmwareUpgradesByDeviceResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationFirmwareUpgradesByDeviceResponse, _super);
    function GetOrganizationFirmwareUpgradesByDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetOrganizationFirmwareUpgradesByDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrganizationFirmwareUpgradesByDeviceResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetOrganizationFirmwareUpgradesByDeviceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrganizationFirmwareUpgradesByDeviceResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            elemType: GetOrganizationFirmwareUpgradesByDevice200ApplicationJSON,
        }),
        __metadata("design:type", Array)
    ], GetOrganizationFirmwareUpgradesByDeviceResponse.prototype, "getOrganizationFirmwareUpgradesByDevice200ApplicationJSONObjects", void 0);
    return GetOrganizationFirmwareUpgradesByDeviceResponse;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationFirmwareUpgradesByDeviceResponse = GetOrganizationFirmwareUpgradesByDeviceResponse;
