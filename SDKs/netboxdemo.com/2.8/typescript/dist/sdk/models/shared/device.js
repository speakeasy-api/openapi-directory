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
exports.Device = exports.DeviceStatus = exports.DeviceStatusValueEnum = exports.DeviceStatusLabelEnum = exports.DeviceFace = exports.DeviceFaceValueEnum = exports.DeviceFaceLabelEnum = void 0;
var utils_1 = require("../../../internal/utils");
var nestedcluster_1 = require("./nestedcluster");
var nesteddevicerole_1 = require("./nesteddevicerole");
var nesteddevicetype_1 = require("./nesteddevicetype");
var nesteddevice_1 = require("./nesteddevice");
var nestedplatform_1 = require("./nestedplatform");
var nestedipaddress_1 = require("./nestedipaddress");
var nestedrack_1 = require("./nestedrack");
var nestedsite_1 = require("./nestedsite");
var nestedtenant_1 = require("./nestedtenant");
var nestedvirtualchassis_1 = require("./nestedvirtualchassis");
var DeviceFaceLabelEnum;
(function (DeviceFaceLabelEnum) {
    DeviceFaceLabelEnum["Front"] = "Front";
    DeviceFaceLabelEnum["Rear"] = "Rear";
})(DeviceFaceLabelEnum = exports.DeviceFaceLabelEnum || (exports.DeviceFaceLabelEnum = {}));
var DeviceFaceValueEnum;
(function (DeviceFaceValueEnum) {
    DeviceFaceValueEnum["Front"] = "front";
    DeviceFaceValueEnum["Rear"] = "rear";
})(DeviceFaceValueEnum = exports.DeviceFaceValueEnum || (exports.DeviceFaceValueEnum = {}));
var DeviceFace = /** @class */ (function (_super) {
    __extends(DeviceFace, _super);
    function DeviceFace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], DeviceFace.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DeviceFace.prototype, "value", void 0);
    return DeviceFace;
}(utils_1.SpeakeasyBase));
exports.DeviceFace = DeviceFace;
var DeviceStatusLabelEnum;
(function (DeviceStatusLabelEnum) {
    DeviceStatusLabelEnum["Offline"] = "Offline";
    DeviceStatusLabelEnum["Active"] = "Active";
    DeviceStatusLabelEnum["Planned"] = "Planned";
    DeviceStatusLabelEnum["Staged"] = "Staged";
    DeviceStatusLabelEnum["Failed"] = "Failed";
    DeviceStatusLabelEnum["Inventory"] = "Inventory";
    DeviceStatusLabelEnum["Decommissioning"] = "Decommissioning";
})(DeviceStatusLabelEnum = exports.DeviceStatusLabelEnum || (exports.DeviceStatusLabelEnum = {}));
var DeviceStatusValueEnum;
(function (DeviceStatusValueEnum) {
    DeviceStatusValueEnum["Offline"] = "offline";
    DeviceStatusValueEnum["Active"] = "active";
    DeviceStatusValueEnum["Planned"] = "planned";
    DeviceStatusValueEnum["Staged"] = "staged";
    DeviceStatusValueEnum["Failed"] = "failed";
    DeviceStatusValueEnum["Inventory"] = "inventory";
    DeviceStatusValueEnum["Decommissioning"] = "decommissioning";
})(DeviceStatusValueEnum = exports.DeviceStatusValueEnum || (exports.DeviceStatusValueEnum = {}));
var DeviceStatus = /** @class */ (function (_super) {
    __extends(DeviceStatus, _super);
    function DeviceStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], DeviceStatus.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DeviceStatus.prototype, "value", void 0);
    return DeviceStatus;
}(utils_1.SpeakeasyBase));
exports.DeviceStatus = DeviceStatus;
var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=asset_tag" }),
        __metadata("design:type", String)
    ], Device.prototype, "assetTag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cluster" }),
        __metadata("design:type", nestedcluster_1.NestedCluster)
    ], Device.prototype, "cluster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], Device.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Device.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_fields" }),
        __metadata("design:type", Object)
    ], Device.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_role" }),
        __metadata("design:type", nesteddevicerole_1.NestedDeviceRole)
    ], Device.prototype, "deviceRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_type" }),
        __metadata("design:type", nesteddevicetype_1.NestedDeviceType)
    ], Device.prototype, "deviceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], Device.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=face" }),
        __metadata("design:type", DeviceFace)
    ], Device.prototype, "face", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Device.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_updated" }),
        __metadata("design:type", Date)
    ], Device.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=local_context_data" }),
        __metadata("design:type", String)
    ], Device.prototype, "localContextData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Device.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent_device" }),
        __metadata("design:type", nesteddevice_1.NestedDevice)
    ], Device.prototype, "parentDevice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=platform" }),
        __metadata("design:type", nestedplatform_1.NestedPlatform)
    ], Device.prototype, "platform", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], Device.prototype, "position", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary_ip" }),
        __metadata("design:type", nestedipaddress_1.NestedIpAddress)
    ], Device.prototype, "primaryIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary_ip4" }),
        __metadata("design:type", nestedipaddress_1.NestedIpAddress)
    ], Device.prototype, "primaryIp4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary_ip6" }),
        __metadata("design:type", nestedipaddress_1.NestedIpAddress)
    ], Device.prototype, "primaryIp6", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rack" }),
        __metadata("design:type", nestedrack_1.NestedRack)
    ], Device.prototype, "rack", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serial" }),
        __metadata("design:type", String)
    ], Device.prototype, "serial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", nestedsite_1.NestedSite)
    ], Device.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", DeviceStatus)
    ], Device.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Device.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tenant" }),
        __metadata("design:type", nestedtenant_1.NestedTenant)
    ], Device.prototype, "tenant", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vc_position" }),
        __metadata("design:type", Number)
    ], Device.prototype, "vcPosition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vc_priority" }),
        __metadata("design:type", Number)
    ], Device.prototype, "vcPriority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_chassis" }),
        __metadata("design:type", nestedvirtualchassis_1.NestedVirtualChassis)
    ], Device.prototype, "virtualChassis", void 0);
    return Device;
}(utils_1.SpeakeasyBase));
exports.Device = Device;
