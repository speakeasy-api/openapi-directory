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
exports.Settings = exports.SettingsReplicationTypeEnum = exports.SettingsPricingPlanEnum = exports.SettingsDataDiskTypeEnum = exports.SettingsConnectorEnforcementEnum = exports.SettingsAvailabilityTypeEnum = exports.SettingsActivationPolicyEnum = void 0;
var utils_1 = require("../../../internal/utils");
var sqlactivedirectoryconfig_1 = require("./sqlactivedirectoryconfig");
var backupconfiguration_1 = require("./backupconfiguration");
var databaseflags_1 = require("./databaseflags");
var denymaintenanceperiod_1 = require("./denymaintenanceperiod");
var insightsconfig_1 = require("./insightsconfig");
var ipconfiguration_1 = require("./ipconfiguration");
var locationpreference_1 = require("./locationpreference");
var maintenancewindow_1 = require("./maintenancewindow");
var passwordvalidationpolicy_1 = require("./passwordvalidationpolicy");
var sqlserverauditconfig_1 = require("./sqlserverauditconfig");
var SettingsActivationPolicyEnum;
(function (SettingsActivationPolicyEnum) {
    SettingsActivationPolicyEnum["SqlActivationPolicyUnspecified"] = "SQL_ACTIVATION_POLICY_UNSPECIFIED";
    SettingsActivationPolicyEnum["Always"] = "ALWAYS";
    SettingsActivationPolicyEnum["Never"] = "NEVER";
    SettingsActivationPolicyEnum["OnDemand"] = "ON_DEMAND";
})(SettingsActivationPolicyEnum = exports.SettingsActivationPolicyEnum || (exports.SettingsActivationPolicyEnum = {}));
var SettingsAvailabilityTypeEnum;
(function (SettingsAvailabilityTypeEnum) {
    SettingsAvailabilityTypeEnum["SqlAvailabilityTypeUnspecified"] = "SQL_AVAILABILITY_TYPE_UNSPECIFIED";
    SettingsAvailabilityTypeEnum["Zonal"] = "ZONAL";
    SettingsAvailabilityTypeEnum["Regional"] = "REGIONAL";
})(SettingsAvailabilityTypeEnum = exports.SettingsAvailabilityTypeEnum || (exports.SettingsAvailabilityTypeEnum = {}));
var SettingsConnectorEnforcementEnum;
(function (SettingsConnectorEnforcementEnum) {
    SettingsConnectorEnforcementEnum["ConnectorEnforcementUnspecified"] = "CONNECTOR_ENFORCEMENT_UNSPECIFIED";
    SettingsConnectorEnforcementEnum["NotRequired"] = "NOT_REQUIRED";
    SettingsConnectorEnforcementEnum["Required"] = "REQUIRED";
})(SettingsConnectorEnforcementEnum = exports.SettingsConnectorEnforcementEnum || (exports.SettingsConnectorEnforcementEnum = {}));
var SettingsDataDiskTypeEnum;
(function (SettingsDataDiskTypeEnum) {
    SettingsDataDiskTypeEnum["SqlDataDiskTypeUnspecified"] = "SQL_DATA_DISK_TYPE_UNSPECIFIED";
    SettingsDataDiskTypeEnum["PdSsd"] = "PD_SSD";
    SettingsDataDiskTypeEnum["PdHdd"] = "PD_HDD";
    SettingsDataDiskTypeEnum["ObsoleteLocalSsd"] = "OBSOLETE_LOCAL_SSD";
})(SettingsDataDiskTypeEnum = exports.SettingsDataDiskTypeEnum || (exports.SettingsDataDiskTypeEnum = {}));
var SettingsPricingPlanEnum;
(function (SettingsPricingPlanEnum) {
    SettingsPricingPlanEnum["SqlPricingPlanUnspecified"] = "SQL_PRICING_PLAN_UNSPECIFIED";
    SettingsPricingPlanEnum["Package"] = "PACKAGE";
    SettingsPricingPlanEnum["PerUse"] = "PER_USE";
})(SettingsPricingPlanEnum = exports.SettingsPricingPlanEnum || (exports.SettingsPricingPlanEnum = {}));
var SettingsReplicationTypeEnum;
(function (SettingsReplicationTypeEnum) {
    SettingsReplicationTypeEnum["SqlReplicationTypeUnspecified"] = "SQL_REPLICATION_TYPE_UNSPECIFIED";
    SettingsReplicationTypeEnum["Synchronous"] = "SYNCHRONOUS";
    SettingsReplicationTypeEnum["Asynchronous"] = "ASYNCHRONOUS";
})(SettingsReplicationTypeEnum = exports.SettingsReplicationTypeEnum || (exports.SettingsReplicationTypeEnum = {}));
// Settings
/**
 * Database instance settings.
**/
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activationPolicy" }),
        __metadata("design:type", String)
    ], Settings.prototype, "activationPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activeDirectoryConfig" }),
        __metadata("design:type", sqlactivedirectoryconfig_1.SqlActiveDirectoryConfig)
    ], Settings.prototype, "activeDirectoryConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorizedGaeApplications" }),
        __metadata("design:type", Array)
    ], Settings.prototype, "authorizedGaeApplications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availabilityType" }),
        __metadata("design:type", String)
    ], Settings.prototype, "availabilityType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backupConfiguration" }),
        __metadata("design:type", backupconfiguration_1.BackupConfiguration)
    ], Settings.prototype, "backupConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collation" }),
        __metadata("design:type", String)
    ], Settings.prototype, "collation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connectorEnforcement" }),
        __metadata("design:type", String)
    ], Settings.prototype, "connectorEnforcement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=crashSafeReplicationEnabled" }),
        __metadata("design:type", Boolean)
    ], Settings.prototype, "crashSafeReplicationEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataDiskSizeGb" }),
        __metadata("design:type", String)
    ], Settings.prototype, "dataDiskSizeGb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataDiskType" }),
        __metadata("design:type", String)
    ], Settings.prototype, "dataDiskType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=databaseFlags", elemType: databaseflags_1.DatabaseFlags }),
        __metadata("design:type", Array)
    ], Settings.prototype, "databaseFlags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=databaseReplicationEnabled" }),
        __metadata("design:type", Boolean)
    ], Settings.prototype, "databaseReplicationEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deletionProtectionEnabled" }),
        __metadata("design:type", Boolean)
    ], Settings.prototype, "deletionProtectionEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=denyMaintenancePeriods", elemType: denymaintenanceperiod_1.DenyMaintenancePeriod }),
        __metadata("design:type", Array)
    ], Settings.prototype, "denyMaintenancePeriods", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insightsConfig" }),
        __metadata("design:type", insightsconfig_1.InsightsConfig)
    ], Settings.prototype, "insightsConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipConfiguration" }),
        __metadata("design:type", ipconfiguration_1.IpConfiguration)
    ], Settings.prototype, "ipConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Settings.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locationPreference" }),
        __metadata("design:type", locationpreference_1.LocationPreference)
    ], Settings.prototype, "locationPreference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maintenanceWindow" }),
        __metadata("design:type", maintenancewindow_1.MaintenanceWindow)
    ], Settings.prototype, "maintenanceWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=passwordValidationPolicy" }),
        __metadata("design:type", passwordvalidationpolicy_1.PasswordValidationPolicy)
    ], Settings.prototype, "passwordValidationPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pricingPlan" }),
        __metadata("design:type", String)
    ], Settings.prototype, "pricingPlan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=replicationType" }),
        __metadata("design:type", String)
    ], Settings.prototype, "replicationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settingsVersion" }),
        __metadata("design:type", String)
    ], Settings.prototype, "settingsVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sqlServerAuditConfig" }),
        __metadata("design:type", sqlserverauditconfig_1.SqlServerAuditConfig)
    ], Settings.prototype, "sqlServerAuditConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storageAutoResize" }),
        __metadata("design:type", Boolean)
    ], Settings.prototype, "storageAutoResize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storageAutoResizeLimit" }),
        __metadata("design:type", String)
    ], Settings.prototype, "storageAutoResizeLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tier" }),
        __metadata("design:type", String)
    ], Settings.prototype, "tier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], Settings.prototype, "timeZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userLabels" }),
        __metadata("design:type", Object)
    ], Settings.prototype, "userLabels", void 0);
    return Settings;
}(utils_1.SpeakeasyBase));
exports.Settings = Settings;
