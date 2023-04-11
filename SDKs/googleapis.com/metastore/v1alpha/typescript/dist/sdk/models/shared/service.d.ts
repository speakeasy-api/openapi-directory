import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfig } from "./encryptionconfig";
import { HiveMetastoreConfig, HiveMetastoreConfigInput } from "./hivemetastoreconfig";
import { MaintenanceWindow } from "./maintenancewindow";
import { MetadataIntegration } from "./metadataintegration";
import { MetadataManagementActivity } from "./metadatamanagementactivity";
import { NetworkConfig, NetworkConfigInput } from "./networkconfig";
import { ScalingConfig } from "./scalingconfig";
import { TelemetryConfig } from "./telemetryconfig";
/**
 * Immutable. The database type that the Metastore service stores its data.
 */
export declare enum ServiceDatabaseTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED",
    Mysql = "MYSQL",
    Spanner = "SPANNER"
}
/**
 * Immutable. The release channel of the service. If unspecified, defaults to STABLE.
 */
export declare enum ServiceReleaseChannelEnum {
    ReleaseChannelUnspecified = "RELEASE_CHANNEL_UNSPECIFIED",
    Canary = "CANARY",
    Stable = "STABLE"
}
/**
 * Output only. The current state of the metastore service.
 */
export declare enum ServiceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Suspending = "SUSPENDING",
    Suspended = "SUSPENDED",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Error = "ERROR"
}
/**
 * The tier of the service.
 */
export declare enum ServiceTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Developer = "DEVELOPER",
    Enterprise = "ENTERPRISE"
}
/**
 * A managed metastore service that serves metadata queries.
 */
export declare class Service extends SpeakeasyBase {
    /**
     * Output only. A Cloud Storage URI (starting with gs://) that specifies where artifacts related to the metastore service are stored.
     */
    artifactGcsUri?: string;
    /**
     * Output only. The time when the metastore service was created.
     */
    createTime?: string;
    /**
     * Immutable. The database type that the Metastore service stores its data.
     */
    databaseType?: ServiceDatabaseTypeEnum;
    /**
     * Encryption settings for the service.
     */
    encryptionConfig?: EncryptionConfig;
    /**
     * Output only. The URI of the endpoint used to access the metastore service.
     */
    endpointUri?: string;
    /**
     * Specifies configuration information specific to running Hive metastore software as the metastore service.
     */
    hiveMetastoreConfig?: HiveMetastoreConfig;
    /**
     * User-defined labels for the metastore service.
     */
    labels?: Record<string, string>;
    /**
     * Maintenance window. This specifies when Dataproc Metastore may perform system maintenance operation to the service.
     */
    maintenanceWindow?: MaintenanceWindow;
    /**
     * Specifies how metastore metadata should be integrated with external services.
     */
    metadataIntegration?: MetadataIntegration;
    /**
     * The metadata management activities of the metastore service.
     */
    metadataManagementActivity?: MetadataManagementActivity;
    /**
     * Immutable. The relative resource name of the metastore service, in the following format:projects/{project_number}/locations/{location_id}/services/{service_id}.
     */
    name?: string;
    /**
     * Immutable. The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:projects/{project_number}/global/networks/{network_id}.
     */
    network?: string;
    /**
     * Network configuration for the Dataproc Metastore service.
     */
    networkConfig?: NetworkConfig;
    /**
     * The TCP port at which the metastore service is reached. Default: 9083.
     */
    port?: number;
    /**
     * Immutable. The release channel of the service. If unspecified, defaults to STABLE.
     */
    releaseChannel?: ServiceReleaseChannelEnum;
    /**
     * Represents the scaling configuration of a metastore service.
     */
    scalingConfig?: ScalingConfig;
    /**
     * Output only. The current state of the metastore service.
     */
    state?: ServiceStateEnum;
    /**
     * Output only. Additional information about the current state of the metastore service, if available.
     */
    stateMessage?: string;
    /**
     * Telemetry Configuration for the Dataproc Metastore service.
     */
    telemetryConfig?: TelemetryConfig;
    /**
     * The tier of the service.
     */
    tier?: ServiceTierEnum;
    /**
     * Output only. The globally unique resource identifier of the metastore service.
     */
    uid?: string;
    /**
     * Output only. The time when the metastore service was last updated.
     */
    updateTime?: string;
}
/**
 * A managed metastore service that serves metadata queries.
 */
export declare class ServiceInput extends SpeakeasyBase {
    /**
     * Immutable. The database type that the Metastore service stores its data.
     */
    databaseType?: ServiceDatabaseTypeEnum;
    /**
     * Encryption settings for the service.
     */
    encryptionConfig?: EncryptionConfig;
    /**
     * Specifies configuration information specific to running Hive metastore software as the metastore service.
     */
    hiveMetastoreConfig?: HiveMetastoreConfigInput;
    /**
     * User-defined labels for the metastore service.
     */
    labels?: Record<string, string>;
    /**
     * Maintenance window. This specifies when Dataproc Metastore may perform system maintenance operation to the service.
     */
    maintenanceWindow?: MaintenanceWindow;
    /**
     * Specifies how metastore metadata should be integrated with external services.
     */
    metadataIntegration?: MetadataIntegration;
    /**
     * Immutable. The relative resource name of the metastore service, in the following format:projects/{project_number}/locations/{location_id}/services/{service_id}.
     */
    name?: string;
    /**
     * Immutable. The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:projects/{project_number}/global/networks/{network_id}.
     */
    network?: string;
    /**
     * Network configuration for the Dataproc Metastore service.
     */
    networkConfig?: NetworkConfigInput;
    /**
     * The TCP port at which the metastore service is reached. Default: 9083.
     */
    port?: number;
    /**
     * Immutable. The release channel of the service. If unspecified, defaults to STABLE.
     */
    releaseChannel?: ServiceReleaseChannelEnum;
    /**
     * Represents the scaling configuration of a metastore service.
     */
    scalingConfig?: ScalingConfig;
    /**
     * Telemetry Configuration for the Dataproc Metastore service.
     */
    telemetryConfig?: TelemetryConfig;
    /**
     * The tier of the service.
     */
    tier?: ServiceTierEnum;
}
