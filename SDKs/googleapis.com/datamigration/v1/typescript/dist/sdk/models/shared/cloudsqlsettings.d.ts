import { SpeakeasyBase } from "../../../internal/utils";
import { SqlIpConfig } from "./sqlipconfig";
/**
 * The activation policy specifies when the instance is activated; it is applicable only when the instance state is 'RUNNABLE'. Valid values: 'ALWAYS': The instance is on, and remains so even in the absence of connection requests. `NEVER`: The instance is off; it is not activated, even if a connection request arrives.
 */
export declare enum CloudSqlSettingsActivationPolicyEnum {
    SqlActivationPolicyUnspecified = "SQL_ACTIVATION_POLICY_UNSPECIFIED",
    Always = "ALWAYS",
    Never = "NEVER"
}
/**
 * Optional. Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data availability. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available).
 */
export declare enum CloudSqlSettingsAvailabilityTypeEnum {
    SqlAvailabilityTypeUnspecified = "SQL_AVAILABILITY_TYPE_UNSPECIFIED",
    Zonal = "ZONAL",
    Regional = "REGIONAL"
}
/**
 * The type of storage: `PD_SSD` (default) or `PD_HDD`.
 */
export declare enum CloudSqlSettingsDataDiskTypeEnum {
    SqlDataDiskTypeUnspecified = "SQL_DATA_DISK_TYPE_UNSPECIFIED",
    PdSsd = "PD_SSD",
    PdHdd = "PD_HDD"
}
/**
 * The database engine type and version.
 */
export declare enum CloudSqlSettingsDatabaseVersionEnum {
    SqlDatabaseVersionUnspecified = "SQL_DATABASE_VERSION_UNSPECIFIED",
    Mysql56 = "MYSQL_5_6",
    Mysql57 = "MYSQL_5_7",
    Postgres96 = "POSTGRES_9_6",
    Postgres11 = "POSTGRES_11",
    Postgres10 = "POSTGRES_10",
    Mysql80 = "MYSQL_8_0",
    Postgres12 = "POSTGRES_12",
    Postgres13 = "POSTGRES_13",
    Postgres14 = "POSTGRES_14"
}
/**
 * Settings for creating a Cloud SQL database instance.
 */
export declare class CloudSqlSettings extends SpeakeasyBase {
    /**
     * The activation policy specifies when the instance is activated; it is applicable only when the instance state is 'RUNNABLE'. Valid values: 'ALWAYS': The instance is on, and remains so even in the absence of connection requests. `NEVER`: The instance is off; it is not activated, even if a connection request arrives.
     */
    activationPolicy?: CloudSqlSettingsActivationPolicyEnum;
    /**
     * [default: ON] If you enable this setting, Cloud SQL checks your available storage every 30 seconds. If the available storage falls below a threshold size, Cloud SQL automatically adds additional storage capacity. If the available storage repeatedly falls below the threshold size, Cloud SQL continues to add storage until it reaches the maximum of 30 TB.
     */
    autoStorageIncrease?: boolean;
    /**
     * Optional. Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data availability. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available).
     */
    availabilityType?: CloudSqlSettingsAvailabilityTypeEnum;
    /**
     * The KMS key name used for the csql instance.
     */
    cmekKeyName?: string;
    /**
     * The Cloud SQL default instance level collation.
     */
    collation?: string;
    /**
     * The storage capacity available to the database, in GB. The minimum (and default) size is 10GB.
     */
    dataDiskSizeGb?: string;
    /**
     * The type of storage: `PD_SSD` (default) or `PD_HDD`.
     */
    dataDiskType?: CloudSqlSettingsDataDiskTypeEnum;
    /**
     * The database flags passed to the Cloud SQL instance at startup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
     */
    databaseFlags?: Record<string, string>;
    /**
     * The database engine type and version.
     */
    databaseVersion?: CloudSqlSettingsDatabaseVersionEnum;
    /**
     * IP Management configuration.
     */
    ipConfig?: SqlIpConfig;
    /**
     * Input only. Initial root password.
     */
    rootPassword?: string;
    /**
     * Output only. Indicates If this connection profile root password is stored.
     */
    rootPasswordSet?: boolean;
    /**
     * Optional. The Google Cloud Platform zone where the failover Cloud SQL database instance is located. Used when the Cloud SQL database availability type is REGIONAL (i.e. multiple zones / highly available).
     */
    secondaryZone?: string;
    /**
     * The Database Migration Service source connection profile ID, in the format: `projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID`
     */
    sourceId?: string;
    /**
     * The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
     */
    storageAutoResizeLimit?: string;
    /**
     * The tier (or machine type) for this instance, for example: `db-n1-standard-1` (MySQL instances) or `db-custom-1-3840` (PostgreSQL instances). For more information, see [Cloud SQL Instance Settings](https://cloud.google.com/sql/docs/mysql/instance-settings).
     */
    tier?: string;
    /**
     * The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "18kg", "count": "3" }`.
     */
    userLabels?: Record<string, string>;
    /**
     * The Google Cloud Platform zone where your Cloud SQL database instance is located.
     */
    zone?: string;
}
/**
 * Settings for creating a Cloud SQL database instance.
 */
export declare class CloudSqlSettingsInput extends SpeakeasyBase {
    /**
     * The activation policy specifies when the instance is activated; it is applicable only when the instance state is 'RUNNABLE'. Valid values: 'ALWAYS': The instance is on, and remains so even in the absence of connection requests. `NEVER`: The instance is off; it is not activated, even if a connection request arrives.
     */
    activationPolicy?: CloudSqlSettingsActivationPolicyEnum;
    /**
     * [default: ON] If you enable this setting, Cloud SQL checks your available storage every 30 seconds. If the available storage falls below a threshold size, Cloud SQL automatically adds additional storage capacity. If the available storage repeatedly falls below the threshold size, Cloud SQL continues to add storage until it reaches the maximum of 30 TB.
     */
    autoStorageIncrease?: boolean;
    /**
     * Optional. Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data availability. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available).
     */
    availabilityType?: CloudSqlSettingsAvailabilityTypeEnum;
    /**
     * The KMS key name used for the csql instance.
     */
    cmekKeyName?: string;
    /**
     * The Cloud SQL default instance level collation.
     */
    collation?: string;
    /**
     * The storage capacity available to the database, in GB. The minimum (and default) size is 10GB.
     */
    dataDiskSizeGb?: string;
    /**
     * The type of storage: `PD_SSD` (default) or `PD_HDD`.
     */
    dataDiskType?: CloudSqlSettingsDataDiskTypeEnum;
    /**
     * The database flags passed to the Cloud SQL instance at startup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
     */
    databaseFlags?: Record<string, string>;
    /**
     * The database engine type and version.
     */
    databaseVersion?: CloudSqlSettingsDatabaseVersionEnum;
    /**
     * IP Management configuration.
     */
    ipConfig?: SqlIpConfig;
    /**
     * Input only. Initial root password.
     */
    rootPassword?: string;
    /**
     * Optional. The Google Cloud Platform zone where the failover Cloud SQL database instance is located. Used when the Cloud SQL database availability type is REGIONAL (i.e. multiple zones / highly available).
     */
    secondaryZone?: string;
    /**
     * The Database Migration Service source connection profile ID, in the format: `projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID`
     */
    sourceId?: string;
    /**
     * The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
     */
    storageAutoResizeLimit?: string;
    /**
     * The tier (or machine type) for this instance, for example: `db-n1-standard-1` (MySQL instances) or `db-custom-1-3840` (PostgreSQL instances). For more information, see [Cloud SQL Instance Settings](https://cloud.google.com/sql/docs/mysql/instance-settings).
     */
    tier?: string;
    /**
     * The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "18kg", "count": "3" }`.
     */
    userLabels?: Record<string, string>;
    /**
     * The Google Cloud Platform zone where your Cloud SQL database instance is located.
     */
    zone?: string;
}
