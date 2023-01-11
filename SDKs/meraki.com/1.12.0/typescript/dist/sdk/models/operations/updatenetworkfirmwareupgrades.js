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
exports.UpdateNetworkFirmwareUpgradesResponse = exports.UpdateNetworkFirmwareUpgradesRequest = exports.UpdateNetworkFirmwareUpgradesRequestBody = exports.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow = exports.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = exports.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum = exports.UpdateNetworkFirmwareUpgradesRequestBodyProducts = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade = exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion = exports.UpdateNetworkFirmwareUpgradesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateNetworkFirmwareUpgradesPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesPathParams, _super);
    function UpdateNetworkFirmwareUpgradesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesPathParams.prototype, "networkId", void 0);
    return UpdateNetworkFirmwareUpgradesPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesPathParams = UpdateNetworkFirmwareUpgradesPathParams;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion
/**
 * The version to be updated to
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion.prototype, "id", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion = UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade
/**
 * The pending firmware upgrade if it exists
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade.prototype, "time", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toVersion" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade.prototype, "toVersion", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade = UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance
/**
 * The network device to be updated
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextUpgrade" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance.prototype, "nextUpgrade", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance = UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion
/**
 * The version to be updated to
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion.prototype, "id", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion = UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade
/**
 * The pending firmware upgrade if it exists
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade.prototype, "time", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toVersion" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade.prototype, "toVersion", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade = UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera
/**
 * The network device to be updated
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextUpgrade" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera.prototype, "nextUpgrade", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera = UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion
/**
 * The version to be updated to
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion.prototype, "id", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion = UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade
/**
 * The pending firmware upgrade if it exists
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade.prototype, "time", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toVersion" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade.prototype, "toVersion", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade = UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway
/**
 * The network device to be updated
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextUpgrade" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway.prototype, "nextUpgrade", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway = UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion
/**
 * The version to be updated to
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion.prototype, "id", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion = UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade
/**
 * The pending firmware upgrade if it exists
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade.prototype, "time", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toVersion" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade.prototype, "toVersion", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade = UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental
/**
 * The network device to be updated
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextUpgrade" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental.prototype, "nextUpgrade", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental = UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion
/**
 * The version to be updated to
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion.prototype, "id", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion = UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade
/**
 * The pending firmware upgrade if it exists
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade.prototype, "time", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toVersion" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade.prototype, "toVersion", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade = UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor
/**
 * The network device to be updated
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextUpgrade" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor.prototype, "nextUpgrade", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor = UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion
/**
 * The version to be updated to
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion.prototype, "id", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion = UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade
/**
 * The pending firmware upgrade if it exists
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade.prototype, "time", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toVersion" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade.prototype, "toVersion", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade = UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch
/**
 * The network device to be updated
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextUpgrade" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch.prototype, "nextUpgrade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participateInNextBetaRelease" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch.prototype, "participateInNextBetaRelease", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch = UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion
/**
 * The version to be updated to
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion.prototype, "id", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion = UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade
/**
 * The pending firmware upgrade if it exists
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade.prototype, "time", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toVersion" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade.prototype, "toVersion", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade = UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost
/**
 * The network device to be updated
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextUpgrade" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost.prototype, "nextUpgrade", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost = UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion
/**
 * The version to be updated to
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion.prototype, "id", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion = UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade
/**
 * The pending firmware upgrade if it exists
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade.prototype, "time", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toVersion" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade.prototype, "toVersion", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade = UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade;
// UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless
/**
 * The network device to be updated
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextUpgrade" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless.prototype, "nextUpgrade", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless = UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless;
// UpdateNetworkFirmwareUpgradesRequestBodyProducts
/**
 * Contains information about the network to update
**/
var UpdateNetworkFirmwareUpgradesRequestBodyProducts = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyProducts, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyProducts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appliance" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProducts.prototype, "appliance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=camera" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProducts.prototype, "camera", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cellularGateway" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProducts.prototype, "cellularGateway", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environmental" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProducts.prototype, "environmental", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sensor" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProducts.prototype, "sensor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=switch" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProducts.prototype, "switch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vmxHost" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProducts.prototype, "vmxHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wireless" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless)
    ], UpdateNetworkFirmwareUpgradesRequestBodyProducts.prototype, "wireless", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyProducts;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyProducts = UpdateNetworkFirmwareUpgradesRequestBodyProducts;
var UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum;
(function (UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum) {
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum["Sun"] = "sun";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum["Mon"] = "mon";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum["Tue"] = "tue";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum["Wed"] = "wed";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum["Thu"] = "thu";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum["Fri"] = "fri";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum["Sat"] = "sat";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum["Sunday"] = "sunday";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum["Monday"] = "monday";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum["Tuesday"] = "tuesday";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum["Wednesday"] = "wednesday";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum["Thursday"] = "thursday";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum["Friday"] = "friday";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum["Saturday"] = "saturday";
})(UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum = exports.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum || (exports.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum = {}));
var UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum;
(function (UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum) {
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Zero00"] = "0:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["One00"] = "1:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Two00"] = "2:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Three00"] = "3:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Four00"] = "4:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Five00"] = "5:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Six00"] = "6:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Seven00"] = "7:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Eight00"] = "8:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Nine00"] = "9:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Ten00"] = "10:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Eleven00"] = "11:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Twelve00"] = "12:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Thirteen00"] = "13:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Fourteen00"] = "14:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Fifteen00"] = "15:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Sixteen00"] = "16:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Seventeen00"] = "17:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Eighteen00"] = "18:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Nineteen00"] = "19:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["Twenty00"] = "20:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["TwentyOne00"] = "21:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["TwentyTwo00"] = "22:00";
    UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum["TwentyThree00"] = "23:00";
})(UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = exports.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum || (exports.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum = {}));
// UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow
/**
 * Upgrade window for devices in network
**/
var UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow, _super);
    function UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dayOfWeek" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow.prototype, "dayOfWeek", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hourOfDay" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow.prototype, "hourOfDay", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow = UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow;
var UpdateNetworkFirmwareUpgradesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequestBody, _super);
    function UpdateNetworkFirmwareUpgradesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=products" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyProducts)
    ], UpdateNetworkFirmwareUpgradesRequestBody.prototype, "products", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesRequestBody.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upgradeWindow" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow)
    ], UpdateNetworkFirmwareUpgradesRequestBody.prototype, "upgradeWindow", void 0);
    return UpdateNetworkFirmwareUpgradesRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequestBody = UpdateNetworkFirmwareUpgradesRequestBody;
var UpdateNetworkFirmwareUpgradesRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesRequest, _super);
    function UpdateNetworkFirmwareUpgradesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesPathParams)
    ], UpdateNetworkFirmwareUpgradesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkFirmwareUpgradesRequestBody)
    ], UpdateNetworkFirmwareUpgradesRequest.prototype, "request", void 0);
    return UpdateNetworkFirmwareUpgradesRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesRequest = UpdateNetworkFirmwareUpgradesRequest;
var UpdateNetworkFirmwareUpgradesResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkFirmwareUpgradesResponse, _super);
    function UpdateNetworkFirmwareUpgradesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNetworkFirmwareUpgradesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNetworkFirmwareUpgradesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNetworkFirmwareUpgradesResponse.prototype, "updateNetworkFirmwareUpgrades200ApplicationJSONObject", void 0);
    return UpdateNetworkFirmwareUpgradesResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNetworkFirmwareUpgradesResponse = UpdateNetworkFirmwareUpgradesResponse;
