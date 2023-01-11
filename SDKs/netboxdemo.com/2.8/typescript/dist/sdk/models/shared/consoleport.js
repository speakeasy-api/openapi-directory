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
exports.ConsolePort = exports.ConsolePortType = exports.ConsolePortTypeValueEnum = exports.ConsolePortTypeLabelEnum = exports.ConsolePortConnectionStatus = exports.ConsolePortConnectionStatusLabelEnum = void 0;
var utils_1 = require("../../../internal/utils");
var nestedcable_1 = require("./nestedcable");
var nesteddevice_1 = require("./nesteddevice");
var ConsolePortConnectionStatusLabelEnum;
(function (ConsolePortConnectionStatusLabelEnum) {
    ConsolePortConnectionStatusLabelEnum["NotConnected"] = "Not Connected";
    ConsolePortConnectionStatusLabelEnum["Connected"] = "Connected";
})(ConsolePortConnectionStatusLabelEnum = exports.ConsolePortConnectionStatusLabelEnum || (exports.ConsolePortConnectionStatusLabelEnum = {}));
var ConsolePortConnectionStatus = /** @class */ (function (_super) {
    __extends(ConsolePortConnectionStatus, _super);
    function ConsolePortConnectionStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ConsolePortConnectionStatus.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Boolean)
    ], ConsolePortConnectionStatus.prototype, "value", void 0);
    return ConsolePortConnectionStatus;
}(utils_1.SpeakeasyBase));
exports.ConsolePortConnectionStatus = ConsolePortConnectionStatus;
var ConsolePortTypeLabelEnum;
(function (ConsolePortTypeLabelEnum) {
    ConsolePortTypeLabelEnum["De9"] = "DE-9";
    ConsolePortTypeLabelEnum["Db25"] = "DB-25";
    ConsolePortTypeLabelEnum["Rj11"] = "RJ-11";
    ConsolePortTypeLabelEnum["Rj12"] = "RJ-12";
    ConsolePortTypeLabelEnum["Rj45"] = "RJ-45";
    ConsolePortTypeLabelEnum["UsbTypeA"] = "USB Type A";
    ConsolePortTypeLabelEnum["UsbTypeB"] = "USB Type B";
    ConsolePortTypeLabelEnum["UsbTypeC"] = "USB Type C";
    ConsolePortTypeLabelEnum["UsbMiniA"] = "USB Mini A";
    ConsolePortTypeLabelEnum["UsbMiniB"] = "USB Mini B";
    ConsolePortTypeLabelEnum["UsbMicroA"] = "USB Micro A";
    ConsolePortTypeLabelEnum["UsbMicroB"] = "USB Micro B";
    ConsolePortTypeLabelEnum["Other"] = "Other";
})(ConsolePortTypeLabelEnum = exports.ConsolePortTypeLabelEnum || (exports.ConsolePortTypeLabelEnum = {}));
var ConsolePortTypeValueEnum;
(function (ConsolePortTypeValueEnum) {
    ConsolePortTypeValueEnum["De9"] = "de-9";
    ConsolePortTypeValueEnum["Db25"] = "db-25";
    ConsolePortTypeValueEnum["Rj11"] = "rj-11";
    ConsolePortTypeValueEnum["Rj12"] = "rj-12";
    ConsolePortTypeValueEnum["Rj45"] = "rj-45";
    ConsolePortTypeValueEnum["UsbA"] = "usb-a";
    ConsolePortTypeValueEnum["UsbB"] = "usb-b";
    ConsolePortTypeValueEnum["UsbC"] = "usb-c";
    ConsolePortTypeValueEnum["UsbMiniA"] = "usb-mini-a";
    ConsolePortTypeValueEnum["UsbMiniB"] = "usb-mini-b";
    ConsolePortTypeValueEnum["UsbMicroA"] = "usb-micro-a";
    ConsolePortTypeValueEnum["UsbMicroB"] = "usb-micro-b";
    ConsolePortTypeValueEnum["Other"] = "other";
})(ConsolePortTypeValueEnum = exports.ConsolePortTypeValueEnum || (exports.ConsolePortTypeValueEnum = {}));
var ConsolePortType = /** @class */ (function (_super) {
    __extends(ConsolePortType, _super);
    function ConsolePortType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ConsolePortType.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ConsolePortType.prototype, "value", void 0);
    return ConsolePortType;
}(utils_1.SpeakeasyBase));
exports.ConsolePortType = ConsolePortType;
var ConsolePort = /** @class */ (function (_super) {
    __extends(ConsolePort, _super);
    function ConsolePort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cable" }),
        __metadata("design:type", nestedcable_1.NestedCable)
    ], ConsolePort.prototype, "cable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connected_endpoint" }),
        __metadata("design:type", Object)
    ], ConsolePort.prototype, "connectedEndpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connected_endpoint_type" }),
        __metadata("design:type", String)
    ], ConsolePort.prototype, "connectedEndpointType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connection_status" }),
        __metadata("design:type", ConsolePortConnectionStatus)
    ], ConsolePort.prototype, "connectionStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ConsolePort.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device" }),
        __metadata("design:type", nesteddevice_1.NestedDevice)
    ], ConsolePort.prototype, "device", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ConsolePort.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConsolePort.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], ConsolePort.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", ConsolePortType)
    ], ConsolePort.prototype, "type", void 0);
    return ConsolePort;
}(utils_1.SpeakeasyBase));
exports.ConsolePort = ConsolePort;
