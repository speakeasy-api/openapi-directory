import { SpeakeasyBase } from "../../../internal/utils";
import { BackupConfiguration } from "./backupconfiguration";
import { DatabaseFlags } from "./databaseflags";
import { DenyMaintenancePeriod } from "./denymaintenanceperiod";
import { InsightsConfig } from "./insightsconfig";
import { IpConfiguration } from "./ipconfiguration";
import { LocationPreference } from "./locationpreference";
import { MaintenanceWindow } from "./maintenancewindow";
import { PasswordValidationPolicy } from "./passwordvalidationpolicy";
import { SqlActiveDirectoryConfig } from "./sqlactivedirectoryconfig";
import { SqlServerAuditConfig } from "./sqlserverauditconfig";
/**
 * The activation policy specifies when the instance is activated; it is applicable only when the instance state is RUNNABLE. Valid values: * `ALWAYS`: The instance is on, and remains so even in the absence of connection requests. * `NEVER`: The instance is off; it is not activated, even if a connection request arrives.
 */
export declare enum SettingsActivationPolicyEnum {
    SqlActivationPolicyUnspecified = "SQL_ACTIVATION_POLICY_UNSPECIFIED",
    Always = "ALWAYS",
    Never = "NEVER",
    OnDemand = "ON_DEMAND"
}
/**
 * Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data accessibility. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available)./ For more information, see [Overview of the High Availability Configuration](https://cloud.google.com/sql/docs/mysql/high-availability).
 */
export declare enum SettingsAvailabilityTypeEnum {
    SqlAvailabilityTypeUnspecified = "SQL_AVAILABILITY_TYPE_UNSPECIFIED",
    Zonal = "ZONAL",
    Regional = "REGIONAL"
}
/**
 * Specifies if connections must use Cloud SQL connectors. Option values include the following: `NOT_REQUIRED` (Cloud SQL instances can be connected without Cloud SQL Connectors) and `REQUIRED` (Only allow connections that use Cloud SQL Connectors) Note that using REQUIRED disables all existing authorized networks. If this field is not specified when creating a new instance, NOT_REQUIRED is used. If this field is not specified when patching or updating an existing instance, it is left unchanged in the instance.
 */
export declare enum SettingsConnectorEnforcementEnum {
    ConnectorEnforcementUnspecified = "CONNECTOR_ENFORCEMENT_UNSPECIFIED",
    NotRequired = "NOT_REQUIRED",
    Required = "REQUIRED"
}
/**
 * The type of data disk: `PD_SSD` (default) or `PD_HDD`. Not used for First Generation instances.
 */
export declare enum SettingsDataDiskTypeEnum {
    SqlDataDiskTypeUnspecified = "SQL_DATA_DISK_TYPE_UNSPECIFIED",
    PdSsd = "PD_SSD",
    PdHdd = "PD_HDD",
    ObsoleteLocalSsd = "OBSOLETE_LOCAL_SSD"
}
/**
 * The pricing plan for this instance. This can be either `PER_USE` or `PACKAGE`. Only `PER_USE` is supported for Second Generation instances.
 */
export declare enum SettingsPricingPlanEnum {
    SqlPricingPlanUnspecified = "SQL_PRICING_PLAN_UNSPECIFIED",
    Package = "PACKAGE",
    PerUse = "PER_USE"
}
/**
 * The type of replication this instance uses. This can be either `ASYNCHRONOUS` or `SYNCHRONOUS`. (Deprecated) This property was only applicable to First Generation instances.
 */
export declare enum SettingsReplicationTypeEnum {
    SqlReplicationTypeUnspecified = "SQL_REPLICATION_TYPE_UNSPECIFIED",
    Synchronous = "SYNCHRONOUS",
    Asynchronous = "ASYNCHRONOUS"
}
/**
 * Database instance settings.
 */
export declare class Settings extends SpeakeasyBase {
    /**
     * The activation policy specifies when the instance is activated; it is applicable only when the instance state is RUNNABLE. Valid values: * `ALWAYS`: The instance is on, and remains so even in the absence of connection requests. * `NEVER`: The instance is off; it is not activated, even if a connection request arrives.
     */
    activationPolicy?: SettingsActivationPolicyEnum;
    /**
     * Active Directory configuration, relevant only for Cloud SQL for SQL Server.
     */
    activeDirectoryConfig?: SqlActiveDirectoryConfig;
    /**
     * The App Engine app IDs that can access this instance. (Deprecated) Applied to First Generation instances only.
     */
    authorizedGaeApplications?: string[];
    /**
     * Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data accessibility. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available)./ For more information, see [Overview of the High Availability Configuration](https://cloud.google.com/sql/docs/mysql/high-availability).
     */
    availabilityType?: SettingsAvailabilityTypeEnum;
    /**
     * Database instance backup configuration.
     */
    backupConfiguration?: BackupConfiguration;
    /**
     * The name of server Instance collation.
     */
    collation?: string;
    /**
     * Specifies if connections must use Cloud SQL connectors. Option values include the following: `NOT_REQUIRED` (Cloud SQL instances can be connected without Cloud SQL Connectors) and `REQUIRED` (Only allow connections that use Cloud SQL Connectors) Note that using REQUIRED disables all existing authorized networks. If this field is not specified when creating a new instance, NOT_REQUIRED is used. If this field is not specified when patching or updating an existing instance, it is left unchanged in the instance.
     */
    connectorEnforcement?: SettingsConnectorEnforcementEnum;
    /**
     * Configuration specific to read replica instances. Indicates whether database flags for crash-safe replication are enabled. This property was only applicable to First Generation instances.
     */
    crashSafeReplicationEnabled?: boolean;
    /**
     * The size of data disk, in GB. The data disk size minimum is 10GB.
     */
    dataDiskSizeGb?: string;
    /**
     * The type of data disk: `PD_SSD` (default) or `PD_HDD`. Not used for First Generation instances.
     */
    dataDiskType?: SettingsDataDiskTypeEnum;
    /**
     * The database flags passed to the instance at startup.
     */
    databaseFlags?: DatabaseFlags[];
    /**
     * Configuration specific to read replica instances. Indicates whether replication is enabled or not. WARNING: Changing this restarts the instance.
     */
    databaseReplicationEnabled?: boolean;
    /**
     * Configuration to protect against accidental instance deletion.
     */
    deletionProtectionEnabled?: boolean;
    /**
     * Deny maintenance periods
     */
    denyMaintenancePeriods?: DenyMaintenancePeriod[];
    /**
     * Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration.
     */
    insightsConfig?: InsightsConfig;
    /**
     * IP Management configuration.
     */
    ipConfiguration?: IpConfiguration;
    /**
     * This is always `sql#settings`.
     */
    kind?: string;
    /**
     * Preferred location. This specifies where a Cloud SQL instance is located. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified.
     */
    locationPreference?: LocationPreference;
    /**
     * Maintenance window. This specifies when a Cloud SQL instance is restarted for system maintenance purposes.
     */
    maintenanceWindow?: MaintenanceWindow;
    /**
     * Database instance local user password validation policy
     */
    passwordValidationPolicy?: PasswordValidationPolicy;
    /**
     * The pricing plan for this instance. This can be either `PER_USE` or `PACKAGE`. Only `PER_USE` is supported for Second Generation instances.
     */
    pricingPlan?: SettingsPricingPlanEnum;
    /**
     * The type of replication this instance uses. This can be either `ASYNCHRONOUS` or `SYNCHRONOUS`. (Deprecated) This property was only applicable to First Generation instances.
     */
    replicationType?: SettingsReplicationTypeEnum;
    /**
     * The version of instance settings. This is a required field for update method to make sure concurrent updates are handled properly. During update, use the most recent settingsVersion value for this instance and do not try to update this value.
     */
    settingsVersion?: string;
    /**
     * SQL Server specific audit configuration.
     */
    sqlServerAuditConfig?: SqlServerAuditConfig;
    /**
     * Configuration to increase storage size automatically. The default value is true.
     */
    storageAutoResize?: boolean;
    /**
     * The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
     */
    storageAutoResizeLimit?: string;
    /**
     * The tier (or machine type) for this instance, for example `db-custom-1-3840`. WARNING: Changing this restarts the instance.
     */
    tier?: string;
    /**
     * Server timezone, relevant only for Cloud SQL for SQL Server.
     */
    timeZone?: string;
    /**
     * User-provided labels, represented as a dictionary where each label is a single key value pair.
     */
    userLabels?: Record<string, string>;
}
