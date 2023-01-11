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
exports.EnvironmentConfig = exports.EnvironmentConfigInput = exports.EnvironmentConfigEnvironmentSizeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var databaseconfig_1 = require("./databaseconfig");
var encryptionconfig_1 = require("./encryptionconfig");
var maintenancewindow_1 = require("./maintenancewindow");
var masterauthorizednetworksconfig_1 = require("./masterauthorizednetworksconfig");
var nodeconfig_1 = require("./nodeconfig");
var privateenvironmentconfig_1 = require("./privateenvironmentconfig");
var recoveryconfig_1 = require("./recoveryconfig");
var softwareconfig_1 = require("./softwareconfig");
var webserverconfig_1 = require("./webserverconfig");
var webservernetworkaccesscontrol_1 = require("./webservernetworkaccesscontrol");
var workloadsconfig_1 = require("./workloadsconfig");
var privateenvironmentconfig_2 = require("./privateenvironmentconfig");
var EnvironmentConfigEnvironmentSizeEnum;
(function (EnvironmentConfigEnvironmentSizeEnum) {
    EnvironmentConfigEnvironmentSizeEnum["EnvironmentSizeUnspecified"] = "ENVIRONMENT_SIZE_UNSPECIFIED";
    EnvironmentConfigEnvironmentSizeEnum["EnvironmentSizeSmall"] = "ENVIRONMENT_SIZE_SMALL";
    EnvironmentConfigEnvironmentSizeEnum["EnvironmentSizeMedium"] = "ENVIRONMENT_SIZE_MEDIUM";
    EnvironmentConfigEnvironmentSizeEnum["EnvironmentSizeLarge"] = "ENVIRONMENT_SIZE_LARGE";
})(EnvironmentConfigEnvironmentSizeEnum = exports.EnvironmentConfigEnvironmentSizeEnum || (exports.EnvironmentConfigEnvironmentSizeEnum = {}));
// EnvironmentConfigInput
/**
 * Configuration information for an environment.
**/
var EnvironmentConfigInput = /** @class */ (function (_super) {
    __extends(EnvironmentConfigInput, _super);
    function EnvironmentConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=airflowUri" }),
        __metadata("design:type", String)
    ], EnvironmentConfigInput.prototype, "airflowUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dagGcsPrefix" }),
        __metadata("design:type", String)
    ], EnvironmentConfigInput.prototype, "dagGcsPrefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=databaseConfig" }),
        __metadata("design:type", databaseconfig_1.DatabaseConfig)
    ], EnvironmentConfigInput.prototype, "databaseConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", encryptionconfig_1.EncryptionConfig)
    ], EnvironmentConfigInput.prototype, "encryptionConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environmentSize" }),
        __metadata("design:type", String)
    ], EnvironmentConfigInput.prototype, "environmentSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gkeCluster" }),
        __metadata("design:type", String)
    ], EnvironmentConfigInput.prototype, "gkeCluster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maintenanceWindow" }),
        __metadata("design:type", maintenancewindow_1.MaintenanceWindow)
    ], EnvironmentConfigInput.prototype, "maintenanceWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=masterAuthorizedNetworksConfig" }),
        __metadata("design:type", masterauthorizednetworksconfig_1.MasterAuthorizedNetworksConfig)
    ], EnvironmentConfigInput.prototype, "masterAuthorizedNetworksConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nodeConfig" }),
        __metadata("design:type", nodeconfig_1.NodeConfig)
    ], EnvironmentConfigInput.prototype, "nodeConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nodeCount" }),
        __metadata("design:type", Number)
    ], EnvironmentConfigInput.prototype, "nodeCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privateEnvironmentConfig" }),
        __metadata("design:type", privateenvironmentconfig_1.PrivateEnvironmentConfigInput)
    ], EnvironmentConfigInput.prototype, "privateEnvironmentConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recoveryConfig" }),
        __metadata("design:type", recoveryconfig_1.RecoveryConfig)
    ], EnvironmentConfigInput.prototype, "recoveryConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=softwareConfig" }),
        __metadata("design:type", softwareconfig_1.SoftwareConfig)
    ], EnvironmentConfigInput.prototype, "softwareConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webServerConfig" }),
        __metadata("design:type", webserverconfig_1.WebServerConfig)
    ], EnvironmentConfigInput.prototype, "webServerConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webServerNetworkAccessControl" }),
        __metadata("design:type", webservernetworkaccesscontrol_1.WebServerNetworkAccessControl)
    ], EnvironmentConfigInput.prototype, "webServerNetworkAccessControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workloadsConfig" }),
        __metadata("design:type", workloadsconfig_1.WorkloadsConfig)
    ], EnvironmentConfigInput.prototype, "workloadsConfig", void 0);
    return EnvironmentConfigInput;
}(utils_1.SpeakeasyBase));
exports.EnvironmentConfigInput = EnvironmentConfigInput;
// EnvironmentConfig
/**
 * Configuration information for an environment.
**/
var EnvironmentConfig = /** @class */ (function (_super) {
    __extends(EnvironmentConfig, _super);
    function EnvironmentConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=airflowUri" }),
        __metadata("design:type", String)
    ], EnvironmentConfig.prototype, "airflowUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dagGcsPrefix" }),
        __metadata("design:type", String)
    ], EnvironmentConfig.prototype, "dagGcsPrefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=databaseConfig" }),
        __metadata("design:type", databaseconfig_1.DatabaseConfig)
    ], EnvironmentConfig.prototype, "databaseConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", encryptionconfig_1.EncryptionConfig)
    ], EnvironmentConfig.prototype, "encryptionConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environmentSize" }),
        __metadata("design:type", String)
    ], EnvironmentConfig.prototype, "environmentSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gkeCluster" }),
        __metadata("design:type", String)
    ], EnvironmentConfig.prototype, "gkeCluster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maintenanceWindow" }),
        __metadata("design:type", maintenancewindow_1.MaintenanceWindow)
    ], EnvironmentConfig.prototype, "maintenanceWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=masterAuthorizedNetworksConfig" }),
        __metadata("design:type", masterauthorizednetworksconfig_1.MasterAuthorizedNetworksConfig)
    ], EnvironmentConfig.prototype, "masterAuthorizedNetworksConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nodeConfig" }),
        __metadata("design:type", nodeconfig_1.NodeConfig)
    ], EnvironmentConfig.prototype, "nodeConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nodeCount" }),
        __metadata("design:type", Number)
    ], EnvironmentConfig.prototype, "nodeCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privateEnvironmentConfig" }),
        __metadata("design:type", privateenvironmentconfig_2.PrivateEnvironmentConfig)
    ], EnvironmentConfig.prototype, "privateEnvironmentConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recoveryConfig" }),
        __metadata("design:type", recoveryconfig_1.RecoveryConfig)
    ], EnvironmentConfig.prototype, "recoveryConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=softwareConfig" }),
        __metadata("design:type", softwareconfig_1.SoftwareConfig)
    ], EnvironmentConfig.prototype, "softwareConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webServerConfig" }),
        __metadata("design:type", webserverconfig_1.WebServerConfig)
    ], EnvironmentConfig.prototype, "webServerConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webServerNetworkAccessControl" }),
        __metadata("design:type", webservernetworkaccesscontrol_1.WebServerNetworkAccessControl)
    ], EnvironmentConfig.prototype, "webServerNetworkAccessControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workloadsConfig" }),
        __metadata("design:type", workloadsconfig_1.WorkloadsConfig)
    ], EnvironmentConfig.prototype, "workloadsConfig", void 0);
    return EnvironmentConfig;
}(utils_1.SpeakeasyBase));
exports.EnvironmentConfig = EnvironmentConfig;
