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
exports.GoogleChromeManagementV1TelemetryDevice = void 0;
var utils_1 = require("../../../internal/utils");
var googlechromemanagementv1audiostatusreport_1 = require("./googlechromemanagementv1audiostatusreport");
var googlechromemanagementv1batteryinfo_1 = require("./googlechromemanagementv1batteryinfo");
var googlechromemanagementv1batterystatusreport_1 = require("./googlechromemanagementv1batterystatusreport");
var googlechromemanagementv1bootperformancereport_1 = require("./googlechromemanagementv1bootperformancereport");
var googlechromemanagementv1cpuinfo_1 = require("./googlechromemanagementv1cpuinfo");
var googlechromemanagementv1cpustatusreport_1 = require("./googlechromemanagementv1cpustatusreport");
var googlechromemanagementv1graphicsinfo_1 = require("./googlechromemanagementv1graphicsinfo");
var googlechromemanagementv1graphicsstatusreport_1 = require("./googlechromemanagementv1graphicsstatusreport");
var googlechromemanagementv1memoryinfo_1 = require("./googlechromemanagementv1memoryinfo");
var googlechromemanagementv1memorystatusreport_1 = require("./googlechromemanagementv1memorystatusreport");
var googlechromemanagementv1networkdiagnosticsreport_1 = require("./googlechromemanagementv1networkdiagnosticsreport");
var googlechromemanagementv1networkinfo_1 = require("./googlechromemanagementv1networkinfo");
var googlechromemanagementv1networkstatusreport_1 = require("./googlechromemanagementv1networkstatusreport");
var googlechromemanagementv1osupdatestatus_1 = require("./googlechromemanagementv1osupdatestatus");
var googlechromemanagementv1storageinfo_1 = require("./googlechromemanagementv1storageinfo");
var googlechromemanagementv1storagestatusreport_1 = require("./googlechromemanagementv1storagestatusreport");
var googlechromemanagementv1thunderboltinfo_1 = require("./googlechromemanagementv1thunderboltinfo");
// GoogleChromeManagementV1TelemetryDevice
/**
 * Telemetry data collected from a managed device.
**/
var GoogleChromeManagementV1TelemetryDevice = /** @class */ (function (_super) {
    __extends(GoogleChromeManagementV1TelemetryDevice, _super);
    function GoogleChromeManagementV1TelemetryDevice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audioStatusReport", elemType: googlechromemanagementv1audiostatusreport_1.GoogleChromeManagementV1AudioStatusReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "audioStatusReport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batteryInfo", elemType: googlechromemanagementv1batteryinfo_1.GoogleChromeManagementV1BatteryInfo }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "batteryInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batteryStatusReport", elemType: googlechromemanagementv1batterystatusreport_1.GoogleChromeManagementV1BatteryStatusReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "batteryStatusReport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bootPerformanceReport", elemType: googlechromemanagementv1bootperformancereport_1.GoogleChromeManagementV1BootPerformanceReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "bootPerformanceReport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cpuInfo", elemType: googlechromemanagementv1cpuinfo_1.GoogleChromeManagementV1CpuInfo }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "cpuInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cpuStatusReport", elemType: googlechromemanagementv1cpustatusreport_1.GoogleChromeManagementV1CpuStatusReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "cpuStatusReport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customer" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "customer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deviceId" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "deviceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=graphicsInfo" }),
        __metadata("design:type", googlechromemanagementv1graphicsinfo_1.GoogleChromeManagementV1GraphicsInfo)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "graphicsInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=graphicsStatusReport", elemType: googlechromemanagementv1graphicsstatusreport_1.GoogleChromeManagementV1GraphicsStatusReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "graphicsStatusReport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memoryInfo" }),
        __metadata("design:type", googlechromemanagementv1memoryinfo_1.GoogleChromeManagementV1MemoryInfo)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "memoryInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memoryStatusReport", elemType: googlechromemanagementv1memorystatusreport_1.GoogleChromeManagementV1MemoryStatusReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "memoryStatusReport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networkDiagnosticsReport", elemType: googlechromemanagementv1networkdiagnosticsreport_1.GoogleChromeManagementV1NetworkDiagnosticsReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "networkDiagnosticsReport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networkInfo" }),
        __metadata("design:type", googlechromemanagementv1networkinfo_1.GoogleChromeManagementV1NetworkInfo)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "networkInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networkStatusReport", elemType: googlechromemanagementv1networkstatusreport_1.GoogleChromeManagementV1NetworkStatusReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "networkStatusReport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orgUnitId" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "orgUnitId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=osUpdateStatus", elemType: googlechromemanagementv1osupdatestatus_1.GoogleChromeManagementV1OsUpdateStatus }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "osUpdateStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "serialNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storageInfo" }),
        __metadata("design:type", googlechromemanagementv1storageinfo_1.GoogleChromeManagementV1StorageInfo)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "storageInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storageStatusReport", elemType: googlechromemanagementv1storagestatusreport_1.GoogleChromeManagementV1StorageStatusReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "storageStatusReport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thunderboltInfo", elemType: googlechromemanagementv1thunderboltinfo_1.GoogleChromeManagementV1ThunderboltInfo }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "thunderboltInfo", void 0);
    return GoogleChromeManagementV1TelemetryDevice;
}(utils_1.SpeakeasyBase));
exports.GoogleChromeManagementV1TelemetryDevice = GoogleChromeManagementV1TelemetryDevice;
