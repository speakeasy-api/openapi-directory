import { SpeakeasyBase } from "../../../internal/utils";
import { FileShareConfig } from "./fileshareconfig";
import { NetworkConfig, NetworkConfigInput } from "./networkconfig";
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
     * Output only. The resource name of the instance, in the format `projects/{project}/locations/{location}/instances/{instance}`.
     */
    name?: string;
    /**
     * VPC networks to which the instance is connected. For this version, only a single network is supported.
     */
    networks?: NetworkConfig[];
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
     * VPC networks to which the instance is connected. For this version, only a single network is supported.
     */
    networks?: NetworkConfigInput[];
    /**
     * The service tier of the instance.
     */
    tier?: InstanceTierEnum;
}
