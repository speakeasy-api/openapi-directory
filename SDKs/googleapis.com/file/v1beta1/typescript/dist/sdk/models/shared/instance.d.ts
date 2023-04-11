import { SpeakeasyBase } from "../../../internal/utils";
import { FileShareConfig } from "./fileshareconfig";
import { NetworkConfig, NetworkConfigInput } from "./networkconfig";
/**
 * Immutable. The protocol indicates the access protocol for all shares in the instance. This field is immutable and it cannot be changed after the instance has been created. Default value: `NFS_V3`.
 */
export declare enum InstanceProtocolEnum {
    FileProtocolUnspecified = "FILE_PROTOCOL_UNSPECIFIED",
    NfsV3 = "NFS_V3",
    NfsV41 = "NFS_V4_1"
}
/**
 * Output only. The instance state.
 */
export declare enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Repairing = "REPAIRING",
    Deleting = "DELETING",
    Error = "ERROR",
    Restoring = "RESTORING",
    Suspended = "SUSPENDED",
    Reverting = "REVERTING",
    Suspending = "SUSPENDING",
    Resuming = "RESUMING"
}
export declare enum InstanceSuspensionReasonsEnum {
    SuspensionReasonUnspecified = "SUSPENSION_REASON_UNSPECIFIED",
    KmsKeyIssue = "KMS_KEY_ISSUE"
}
/**
 * The service tier of the instance.
 */
export declare enum InstanceTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Standard = "STANDARD",
    Premium = "PREMIUM",
    BasicHdd = "BASIC_HDD",
    BasicSsd = "BASIC_SSD",
    HighScaleSsd = "HIGH_SCALE_SSD",
    Enterprise = "ENTERPRISE"
}
/**
 * A Filestore instance.
 */
export declare class Instance extends SpeakeasyBase {
    /**
     * The storage capacity of the instance in gigabytes (GB = 1024^3 bytes). This capacity can be increased up to `max_capacity_gb` GB in multipliers of `capacity_step_size_gb` GB.
     */
    capacityGb?: string;
    /**
     * Output only. The increase/decrease capacity step size.
     */
    capacityStepSizeGb?: string;
    /**
     * Output only. The time when the instance was created.
     */
    createTime?: string;
    /**
     * The description of the instance (2048 characters or less).
     */
    description?: string;
    /**
     * Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other.
     */
    etag?: string;
    /**
     * File system shares on the instance. For this version, only a single file share is supported.
     */
    fileShares?: FileShareConfig[];
    /**
     * KMS key name used for data encryption.
     */
    kmsKeyName?: string;
    /**
     * Resource labels to represent user provided metadata.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The max capacity of the instance.
     */
    maxCapacityGb?: string;
    /**
     * Output only. The max number of shares allowed.
     */
    maxShareCount?: string;
    /**
     * Indicates whether this instance uses a multi-share configuration with which it can have more than one file-share or none at all. File-shares are added, updated and removed through the separate file-share APIs.
     */
    multiShareEnabled?: boolean;
    /**
     * Output only. The resource name of the instance, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}`.
     */
    name?: string;
    /**
     * VPC networks to which the instance is connected. For this version, only a single network is supported.
     */
    networks?: NetworkConfig[];
    /**
     * Immutable. The protocol indicates the access protocol for all shares in the instance. This field is immutable and it cannot be changed after the instance has been created. Default value: `NFS_V3`.
     */
    protocol?: InstanceProtocolEnum;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean;
    /**
     * Output only. The instance state.
     */
    state?: InstanceStateEnum;
    /**
     * Output only. Additional information about the instance state, if available.
     */
    statusMessage?: string;
    /**
     * Output only. Field indicates all the reasons the instance is in "SUSPENDED" state.
     */
    suspensionReasons?: InstanceSuspensionReasonsEnum[];
    /**
     * The service tier of the instance.
     */
    tier?: InstanceTierEnum;
}
/**
 * A Filestore instance.
 */
export declare class InstanceInput extends SpeakeasyBase {
    /**
     * The storage capacity of the instance in gigabytes (GB = 1024^3 bytes). This capacity can be increased up to `max_capacity_gb` GB in multipliers of `capacity_step_size_gb` GB.
     */
    capacityGb?: string;
    /**
     * The description of the instance (2048 characters or less).
     */
    description?: string;
    /**
     * Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other.
     */
    etag?: string;
    /**
     * File system shares on the instance. For this version, only a single file share is supported.
     */
    fileShares?: FileShareConfig[];
    /**
     * KMS key name used for data encryption.
     */
    kmsKeyName?: string;
    /**
     * Resource labels to represent user provided metadata.
     */
    labels?: Record<string, string>;
    /**
     * Indicates whether this instance uses a multi-share configuration with which it can have more than one file-share or none at all. File-shares are added, updated and removed through the separate file-share APIs.
     */
    multiShareEnabled?: boolean;
    /**
     * VPC networks to which the instance is connected. For this version, only a single network is supported.
     */
    networks?: NetworkConfigInput[];
    /**
     * Immutable. The protocol indicates the access protocol for all shares in the instance. This field is immutable and it cannot be changed after the instance has been created. Default value: `NFS_V3`.
     */
    protocol?: InstanceProtocolEnum;
    /**
     * The service tier of the instance.
     */
    tier?: InstanceTierEnum;
}
