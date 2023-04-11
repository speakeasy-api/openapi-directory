import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the behavior to apply to scheduled snapshots when the source disk is deleted.
 */
export declare enum ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum {
    ApplyRetentionPolicy = "APPLY_RETENTION_POLICY",
    KeepAutoSnapshots = "KEEP_AUTO_SNAPSHOTS",
    UnspecifiedOnSourceDiskDelete = "UNSPECIFIED_ON_SOURCE_DISK_DELETE"
}
/**
 * Policy for retention of scheduled snapshots.
 */
export declare class ResourcePolicySnapshotSchedulePolicyRetentionPolicy extends SpeakeasyBase {
    /**
     * Maximum age of the snapshot that is allowed to be kept.
     */
    maxRetentionDays?: number;
    /**
     * Specifies the behavior to apply to scheduled snapshots when the source disk is deleted.
     */
    onSourceDiskDelete?: ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum;
}
