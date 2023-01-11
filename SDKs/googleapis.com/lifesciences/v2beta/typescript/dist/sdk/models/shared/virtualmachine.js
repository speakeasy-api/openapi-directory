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
exports.VirtualMachine = void 0;
var utils_1 = require("../../../internal/utils");
var accelerator_1 = require("./accelerator");
var disk_1 = require("./disk");
var network_1 = require("./network");
var serviceaccount_1 = require("./serviceaccount");
var volume_1 = require("./volume");
// VirtualMachine
/**
 * Carries information about a Compute Engine VM resource.
**/
var VirtualMachine = /** @class */ (function (_super) {
    __extends(VirtualMachine, _super);
    function VirtualMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accelerators", elemType: accelerator_1.Accelerator }),
        __metadata("design:type", Array)
    ], VirtualMachine.prototype, "accelerators", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bootDiskSizeGb" }),
        __metadata("design:type", Number)
    ], VirtualMachine.prototype, "bootDiskSizeGb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bootImage" }),
        __metadata("design:type", String)
    ], VirtualMachine.prototype, "bootImage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cpuPlatform" }),
        __metadata("design:type", String)
    ], VirtualMachine.prototype, "cpuPlatform", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disks", elemType: disk_1.Disk }),
        __metadata("design:type", Array)
    ], VirtualMachine.prototype, "disks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dockerCacheImages" }),
        __metadata("design:type", Array)
    ], VirtualMachine.prototype, "dockerCacheImages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enableStackdriverMonitoring" }),
        __metadata("design:type", Boolean)
    ], VirtualMachine.prototype, "enableStackdriverMonitoring", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], VirtualMachine.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], VirtualMachine.prototype, "machineType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network" }),
        __metadata("design:type", network_1.Network)
    ], VirtualMachine.prototype, "network", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nvidiaDriverVersion" }),
        __metadata("design:type", String)
    ], VirtualMachine.prototype, "nvidiaDriverVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preemptible" }),
        __metadata("design:type", Boolean)
    ], VirtualMachine.prototype, "preemptible", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reservation" }),
        __metadata("design:type", String)
    ], VirtualMachine.prototype, "reservation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceAccount" }),
        __metadata("design:type", serviceaccount_1.ServiceAccount)
    ], VirtualMachine.prototype, "serviceAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volumes", elemType: volume_1.Volume }),
        __metadata("design:type", Array)
    ], VirtualMachine.prototype, "volumes", void 0);
    return VirtualMachine;
}(utils_1.SpeakeasyBase));
exports.VirtualMachine = VirtualMachine;
