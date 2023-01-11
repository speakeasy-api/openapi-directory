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
exports.Device = exports.DeviceLogLevelEnum = void 0;
var utils_1 = require("../../../internal/utils");
var deviceconfig_1 = require("./deviceconfig");
var devicecredential_1 = require("./devicecredential");
var gatewayconfig_1 = require("./gatewayconfig");
var status_1 = require("./status");
var devicestate_1 = require("./devicestate");
var DeviceLogLevelEnum;
(function (DeviceLogLevelEnum) {
    DeviceLogLevelEnum["LogLevelUnspecified"] = "LOG_LEVEL_UNSPECIFIED";
    DeviceLogLevelEnum["None"] = "NONE";
    DeviceLogLevelEnum["Error"] = "ERROR";
    DeviceLogLevelEnum["Info"] = "INFO";
    DeviceLogLevelEnum["Debug"] = "DEBUG";
})(DeviceLogLevelEnum = exports.DeviceLogLevelEnum || (exports.DeviceLogLevelEnum = {}));
// Device
/**
 * The device resource.
**/
var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=blocked" }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "blocked", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=config" }),
        __metadata("design:type", deviceconfig_1.DeviceConfig)
    ], Device.prototype, "config", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=credentials", elemType: devicecredential_1.DeviceCredential }),
        __metadata("design:type", Array)
    ], Device.prototype, "credentials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayConfig" }),
        __metadata("design:type", gatewayconfig_1.GatewayConfig)
    ], Device.prototype, "gatewayConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Device.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastConfigAckTime" }),
        __metadata("design:type", String)
    ], Device.prototype, "lastConfigAckTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastConfigSendTime" }),
        __metadata("design:type", String)
    ], Device.prototype, "lastConfigSendTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastErrorStatus" }),
        __metadata("design:type", status_1.Status)
    ], Device.prototype, "lastErrorStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastErrorTime" }),
        __metadata("design:type", String)
    ], Device.prototype, "lastErrorTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastEventTime" }),
        __metadata("design:type", String)
    ], Device.prototype, "lastEventTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastHeartbeatTime" }),
        __metadata("design:type", String)
    ], Device.prototype, "lastHeartbeatTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastStateTime" }),
        __metadata("design:type", String)
    ], Device.prototype, "lastStateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logLevel" }),
        __metadata("design:type", String)
    ], Device.prototype, "logLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", Object)
    ], Device.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Device.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numId" }),
        __metadata("design:type", String)
    ], Device.prototype, "numId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", devicestate_1.DeviceState)
    ], Device.prototype, "state", void 0);
    return Device;
}(utils_1.SpeakeasyBase));
exports.Device = Device;
