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
exports.NestedPowerPort = exports.NestedPowerPortConnectionStatus = exports.NestedPowerPortConnectionStatusLabelEnum = void 0;
var utils_1 = require("../../../internal/utils");
var nesteddevice_1 = require("./nesteddevice");
var NestedPowerPortConnectionStatusLabelEnum;
(function (NestedPowerPortConnectionStatusLabelEnum) {
    NestedPowerPortConnectionStatusLabelEnum["NotConnected"] = "Not Connected";
    NestedPowerPortConnectionStatusLabelEnum["Connected"] = "Connected";
})(NestedPowerPortConnectionStatusLabelEnum = exports.NestedPowerPortConnectionStatusLabelEnum || (exports.NestedPowerPortConnectionStatusLabelEnum = {}));
var NestedPowerPortConnectionStatus = /** @class */ (function (_super) {
    __extends(NestedPowerPortConnectionStatus, _super);
    function NestedPowerPortConnectionStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], NestedPowerPortConnectionStatus.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Boolean)
    ], NestedPowerPortConnectionStatus.prototype, "value", void 0);
    return NestedPowerPortConnectionStatus;
}(utils_1.SpeakeasyBase));
exports.NestedPowerPortConnectionStatus = NestedPowerPortConnectionStatus;
var NestedPowerPort = /** @class */ (function (_super) {
    __extends(NestedPowerPort, _super);
    function NestedPowerPort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cable" }),
        __metadata("design:type", Number)
    ], NestedPowerPort.prototype, "cable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connection_status" }),
        __metadata("design:type", NestedPowerPortConnectionStatus)
    ], NestedPowerPort.prototype, "connectionStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device" }),
        __metadata("design:type", nesteddevice_1.NestedDevice)
    ], NestedPowerPort.prototype, "device", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], NestedPowerPort.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NestedPowerPort.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], NestedPowerPort.prototype, "url", void 0);
    return NestedPowerPort;
}(utils_1.SpeakeasyBase));
exports.NestedPowerPort = NestedPowerPort;
