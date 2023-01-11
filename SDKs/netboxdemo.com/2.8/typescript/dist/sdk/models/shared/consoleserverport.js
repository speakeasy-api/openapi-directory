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
exports.ConsoleServerPort = exports.ConsoleServerPortType = exports.ConsoleServerPortTypeValueEnum = exports.ConsoleServerPortTypeLabelEnum = exports.ConsoleServerPortConnectionStatus = exports.ConsoleServerPortConnectionStatusLabelEnum = void 0;
var utils_1 = require("../../../internal/utils");
var nestedcable_1 = require("./nestedcable");
var nesteddevice_1 = require("./nesteddevice");
var ConsoleServerPortConnectionStatusLabelEnum;
(function (ConsoleServerPortConnectionStatusLabelEnum) {
    ConsoleServerPortConnectionStatusLabelEnum["NotConnected"] = "Not Connected";
    ConsoleServerPortConnectionStatusLabelEnum["Connected"] = "Connected";
})(ConsoleServerPortConnectionStatusLabelEnum = exports.ConsoleServerPortConnectionStatusLabelEnum || (exports.ConsoleServerPortConnectionStatusLabelEnum = {}));
var ConsoleServerPortConnectionStatus = /** @class */ (function (_super) {
    __extends(ConsoleServerPortConnectionStatus, _super);
    function ConsoleServerPortConnectionStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ConsoleServerPortConnectionStatus.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Boolean)
    ], ConsoleServerPortConnectionStatus.prototype, "value", void 0);
    return ConsoleServerPortConnectionStatus;
}(utils_1.SpeakeasyBase));
exports.ConsoleServerPortConnectionStatus = ConsoleServerPortConnectionStatus;
var ConsoleServerPortTypeLabelEnum;
(function (ConsoleServerPortTypeLabelEnum) {
    ConsoleServerPortTypeLabelEnum["De9"] = "DE-9";
    ConsoleServerPortTypeLabelEnum["Db25"] = "DB-25";
    ConsoleServerPortTypeLabelEnum["Rj11"] = "RJ-11";
    ConsoleServerPortTypeLabelEnum["Rj12"] = "RJ-12";
    ConsoleServerPortTypeLabelEnum["Rj45"] = "RJ-45";
    ConsoleServerPortTypeLabelEnum["UsbTypeA"] = "USB Type A";
    ConsoleServerPortTypeLabelEnum["UsbTypeB"] = "USB Type B";
    ConsoleServerPortTypeLabelEnum["UsbTypeC"] = "USB Type C";
    ConsoleServerPortTypeLabelEnum["UsbMiniA"] = "USB Mini A";
    ConsoleServerPortTypeLabelEnum["UsbMiniB"] = "USB Mini B";
    ConsoleServerPortTypeLabelEnum["UsbMicroA"] = "USB Micro A";
    ConsoleServerPortTypeLabelEnum["UsbMicroB"] = "USB Micro B";
    ConsoleServerPortTypeLabelEnum["Other"] = "Other";
})(ConsoleServerPortTypeLabelEnum = exports.ConsoleServerPortTypeLabelEnum || (exports.ConsoleServerPortTypeLabelEnum = {}));
var ConsoleServerPortTypeValueEnum;
(function (ConsoleServerPortTypeValueEnum) {
    ConsoleServerPortTypeValueEnum["De9"] = "de-9";
    ConsoleServerPortTypeValueEnum["Db25"] = "db-25";
    ConsoleServerPortTypeValueEnum["Rj11"] = "rj-11";
    ConsoleServerPortTypeValueEnum["Rj12"] = "rj-12";
    ConsoleServerPortTypeValueEnum["Rj45"] = "rj-45";
    ConsoleServerPortTypeValueEnum["UsbA"] = "usb-a";
    ConsoleServerPortTypeValueEnum["UsbB"] = "usb-b";
    ConsoleServerPortTypeValueEnum["UsbC"] = "usb-c";
    ConsoleServerPortTypeValueEnum["UsbMiniA"] = "usb-mini-a";
    ConsoleServerPortTypeValueEnum["UsbMiniB"] = "usb-mini-b";
    ConsoleServerPortTypeValueEnum["UsbMicroA"] = "usb-micro-a";
    ConsoleServerPortTypeValueEnum["UsbMicroB"] = "usb-micro-b";
    ConsoleServerPortTypeValueEnum["Other"] = "other";
})(ConsoleServerPortTypeValueEnum = exports.ConsoleServerPortTypeValueEnum || (exports.ConsoleServerPortTypeValueEnum = {}));
var ConsoleServerPortType = /** @class */ (function (_super) {
    __extends(ConsoleServerPortType, _super);
    function ConsoleServerPortType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ConsoleServerPortType.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ConsoleServerPortType.prototype, "value", void 0);
    return ConsoleServerPortType;
}(utils_1.SpeakeasyBase));
exports.ConsoleServerPortType = ConsoleServerPortType;
var ConsoleServerPort = /** @class */ (function (_super) {
    __extends(ConsoleServerPort, _super);
    function ConsoleServerPort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cable" }),
        __metadata("design:type", nestedcable_1.NestedCable)
    ], ConsoleServerPort.prototype, "cable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connected_endpoint" }),
        __metadata("design:type", Object)
    ], ConsoleServerPort.prototype, "connectedEndpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connected_endpoint_type" }),
        __metadata("design:type", String)
    ], ConsoleServerPort.prototype, "connectedEndpointType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connection_status" }),
        __metadata("design:type", ConsoleServerPortConnectionStatus)
    ], ConsoleServerPort.prototype, "connectionStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ConsoleServerPort.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device" }),
        __metadata("design:type", nesteddevice_1.NestedDevice)
    ], ConsoleServerPort.prototype, "device", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ConsoleServerPort.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConsoleServerPort.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], ConsoleServerPort.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", ConsoleServerPortType)
    ], ConsoleServerPort.prototype, "type", void 0);
    return ConsoleServerPort;
}(utils_1.SpeakeasyBase));
exports.ConsoleServerPort = ConsoleServerPort;
