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
exports.ServiceInput = exports.Service = exports.ServiceTierEnum = exports.ServiceStateEnum = exports.ServiceReleaseChannelEnum = exports.ServiceDatabaseTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var encryptionconfig_1 = require("./encryptionconfig");
var hivemetastoreconfig_1 = require("./hivemetastoreconfig");
var maintenancewindow_1 = require("./maintenancewindow");
var metadatamanagementactivity_1 = require("./metadatamanagementactivity");
var networkconfig_1 = require("./networkconfig");
var telemetryconfig_1 = require("./telemetryconfig");
var networkconfig_2 = require("./networkconfig");
var ServiceDatabaseTypeEnum;
(function (ServiceDatabaseTypeEnum) {
    ServiceDatabaseTypeEnum["DatabaseTypeUnspecified"] = "DATABASE_TYPE_UNSPECIFIED";
    ServiceDatabaseTypeEnum["Mysql"] = "MYSQL";
    ServiceDatabaseTypeEnum["Spanner"] = "SPANNER";
})(ServiceDatabaseTypeEnum = exports.ServiceDatabaseTypeEnum || (exports.ServiceDatabaseTypeEnum = {}));
var ServiceReleaseChannelEnum;
(function (ServiceReleaseChannelEnum) {
    ServiceReleaseChannelEnum["ReleaseChannelUnspecified"] = "RELEASE_CHANNEL_UNSPECIFIED";
    ServiceReleaseChannelEnum["Canary"] = "CANARY";
    ServiceReleaseChannelEnum["Stable"] = "STABLE";
})(ServiceReleaseChannelEnum = exports.ServiceReleaseChannelEnum || (exports.ServiceReleaseChannelEnum = {}));
var ServiceStateEnum;
(function (ServiceStateEnum) {
    ServiceStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ServiceStateEnum["Creating"] = "CREATING";
    ServiceStateEnum["Active"] = "ACTIVE";
    ServiceStateEnum["Suspending"] = "SUSPENDING";
    ServiceStateEnum["Suspended"] = "SUSPENDED";
    ServiceStateEnum["Updating"] = "UPDATING";
    ServiceStateEnum["Deleting"] = "DELETING";
    ServiceStateEnum["Error"] = "ERROR";
})(ServiceStateEnum = exports.ServiceStateEnum || (exports.ServiceStateEnum = {}));
var ServiceTierEnum;
(function (ServiceTierEnum) {
    ServiceTierEnum["TierUnspecified"] = "TIER_UNSPECIFIED";
    ServiceTierEnum["Developer"] = "DEVELOPER";
    ServiceTierEnum["Enterprise"] = "ENTERPRISE";
})(ServiceTierEnum = exports.ServiceTierEnum || (exports.ServiceTierEnum = {}));
// Service
/**
 * A managed metastore service that serves metadata queries.
**/
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artifactGcsUri" }),
        __metadata("design:type", String)
    ], Service.prototype, "artifactGcsUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Service.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=databaseType" }),
        __metadata("design:type", String)
    ], Service.prototype, "databaseType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", encryptionconfig_1.EncryptionConfig)
    ], Service.prototype, "encryptionConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endpointUri" }),
        __metadata("design:type", String)
    ], Service.prototype, "endpointUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hiveMetastoreConfig" }),
        __metadata("design:type", hivemetastoreconfig_1.HiveMetastoreConfig)
    ], Service.prototype, "hiveMetastoreConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], Service.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maintenanceWindow" }),
        __metadata("design:type", maintenancewindow_1.MaintenanceWindow)
    ], Service.prototype, "maintenanceWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadataManagementActivity" }),
        __metadata("design:type", metadatamanagementactivity_1.MetadataManagementActivity)
    ], Service.prototype, "metadataManagementActivity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Service.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], Service.prototype, "network", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networkConfig" }),
        __metadata("design:type", networkconfig_1.NetworkConfig)
    ], Service.prototype, "networkConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], Service.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=releaseChannel" }),
        __metadata("design:type", String)
    ], Service.prototype, "releaseChannel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Service.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stateMessage" }),
        __metadata("design:type", String)
    ], Service.prototype, "stateMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telemetryConfig" }),
        __metadata("design:type", telemetryconfig_1.TelemetryConfig)
    ], Service.prototype, "telemetryConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tier" }),
        __metadata("design:type", String)
    ], Service.prototype, "tier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], Service.prototype, "uid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Service.prototype, "updateTime", void 0);
    return Service;
}(utils_1.SpeakeasyBase));
exports.Service = Service;
// ServiceInput
/**
 * A managed metastore service that serves metadata queries.
**/
var ServiceInput = /** @class */ (function (_super) {
    __extends(ServiceInput, _super);
    function ServiceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=databaseType" }),
        __metadata("design:type", String)
    ], ServiceInput.prototype, "databaseType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", encryptionconfig_1.EncryptionConfig)
    ], ServiceInput.prototype, "encryptionConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hiveMetastoreConfig" }),
        __metadata("design:type", hivemetastoreconfig_1.HiveMetastoreConfig)
    ], ServiceInput.prototype, "hiveMetastoreConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], ServiceInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maintenanceWindow" }),
        __metadata("design:type", maintenancewindow_1.MaintenanceWindow)
    ], ServiceInput.prototype, "maintenanceWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ServiceInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], ServiceInput.prototype, "network", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networkConfig" }),
        __metadata("design:type", networkconfig_2.NetworkConfigInput)
    ], ServiceInput.prototype, "networkConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], ServiceInput.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=releaseChannel" }),
        __metadata("design:type", String)
    ], ServiceInput.prototype, "releaseChannel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telemetryConfig" }),
        __metadata("design:type", telemetryconfig_1.TelemetryConfig)
    ], ServiceInput.prototype, "telemetryConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tier" }),
        __metadata("design:type", String)
    ], ServiceInput.prototype, "tier", void 0);
    return ServiceInput;
}(utils_1.SpeakeasyBase));
exports.ServiceInput = ServiceInput;
