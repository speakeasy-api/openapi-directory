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
exports.VirtualMachineWithConfigContext = exports.VirtualMachineWithConfigContextStatus = exports.VirtualMachineWithConfigContextStatusValueEnum = exports.VirtualMachineWithConfigContextStatusLabelEnum = void 0;
var utils_1 = require("../../../internal/utils");
var nestedcluster_1 = require("./nestedcluster");
var nestedplatform_1 = require("./nestedplatform");
var nestedipaddress_1 = require("./nestedipaddress");
var nesteddevicerole_1 = require("./nesteddevicerole");
var nestedsite_1 = require("./nestedsite");
var nestedtenant_1 = require("./nestedtenant");
var VirtualMachineWithConfigContextStatusLabelEnum;
(function (VirtualMachineWithConfigContextStatusLabelEnum) {
    VirtualMachineWithConfigContextStatusLabelEnum["Offline"] = "Offline";
    VirtualMachineWithConfigContextStatusLabelEnum["Active"] = "Active";
    VirtualMachineWithConfigContextStatusLabelEnum["Planned"] = "Planned";
    VirtualMachineWithConfigContextStatusLabelEnum["Staged"] = "Staged";
    VirtualMachineWithConfigContextStatusLabelEnum["Failed"] = "Failed";
    VirtualMachineWithConfigContextStatusLabelEnum["Decommissioning"] = "Decommissioning";
})(VirtualMachineWithConfigContextStatusLabelEnum = exports.VirtualMachineWithConfigContextStatusLabelEnum || (exports.VirtualMachineWithConfigContextStatusLabelEnum = {}));
var VirtualMachineWithConfigContextStatusValueEnum;
(function (VirtualMachineWithConfigContextStatusValueEnum) {
    VirtualMachineWithConfigContextStatusValueEnum["Offline"] = "offline";
    VirtualMachineWithConfigContextStatusValueEnum["Active"] = "active";
    VirtualMachineWithConfigContextStatusValueEnum["Planned"] = "planned";
    VirtualMachineWithConfigContextStatusValueEnum["Staged"] = "staged";
    VirtualMachineWithConfigContextStatusValueEnum["Failed"] = "failed";
    VirtualMachineWithConfigContextStatusValueEnum["Decommissioning"] = "decommissioning";
})(VirtualMachineWithConfigContextStatusValueEnum = exports.VirtualMachineWithConfigContextStatusValueEnum || (exports.VirtualMachineWithConfigContextStatusValueEnum = {}));
var VirtualMachineWithConfigContextStatus = /** @class */ (function (_super) {
    __extends(VirtualMachineWithConfigContextStatus, _super);
    function VirtualMachineWithConfigContextStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], VirtualMachineWithConfigContextStatus.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], VirtualMachineWithConfigContextStatus.prototype, "value", void 0);
    return VirtualMachineWithConfigContextStatus;
}(utils_1.SpeakeasyBase));
exports.VirtualMachineWithConfigContextStatus = VirtualMachineWithConfigContextStatus;
var VirtualMachineWithConfigContext = /** @class */ (function (_super) {
    __extends(VirtualMachineWithConfigContext, _super);
    function VirtualMachineWithConfigContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cluster" }),
        __metadata("design:type", nestedcluster_1.NestedCluster)
    ], VirtualMachineWithConfigContext.prototype, "cluster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], VirtualMachineWithConfigContext.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=config_context" }),
        __metadata("design:type", Object)
    ], VirtualMachineWithConfigContext.prototype, "configContext", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], VirtualMachineWithConfigContext.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_fields" }),
        __metadata("design:type", Object)
    ], VirtualMachineWithConfigContext.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disk" }),
        __metadata("design:type", Number)
    ], VirtualMachineWithConfigContext.prototype, "disk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], VirtualMachineWithConfigContext.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_updated" }),
        __metadata("design:type", Date)
    ], VirtualMachineWithConfigContext.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=local_context_data" }),
        __metadata("design:type", String)
    ], VirtualMachineWithConfigContext.prototype, "localContextData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], VirtualMachineWithConfigContext.prototype, "memory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VirtualMachineWithConfigContext.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=platform" }),
        __metadata("design:type", nestedplatform_1.NestedPlatform)
    ], VirtualMachineWithConfigContext.prototype, "platform", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary_ip" }),
        __metadata("design:type", nestedipaddress_1.NestedIpAddress)
    ], VirtualMachineWithConfigContext.prototype, "primaryIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary_ip4" }),
        __metadata("design:type", nestedipaddress_1.NestedIpAddress)
    ], VirtualMachineWithConfigContext.prototype, "primaryIp4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary_ip6" }),
        __metadata("design:type", nestedipaddress_1.NestedIpAddress)
    ], VirtualMachineWithConfigContext.prototype, "primaryIp6", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role" }),
        __metadata("design:type", nesteddevicerole_1.NestedDeviceRole)
    ], VirtualMachineWithConfigContext.prototype, "role", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", nestedsite_1.NestedSite)
    ], VirtualMachineWithConfigContext.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", VirtualMachineWithConfigContextStatus)
    ], VirtualMachineWithConfigContext.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], VirtualMachineWithConfigContext.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tenant" }),
        __metadata("design:type", nestedtenant_1.NestedTenant)
    ], VirtualMachineWithConfigContext.prototype, "tenant", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vcpus" }),
        __metadata("design:type", Number)
    ], VirtualMachineWithConfigContext.prototype, "vcpus", void 0);
    return VirtualMachineWithConfigContext;
}(utils_1.SpeakeasyBase));
exports.VirtualMachineWithConfigContext = VirtualMachineWithConfigContext;
