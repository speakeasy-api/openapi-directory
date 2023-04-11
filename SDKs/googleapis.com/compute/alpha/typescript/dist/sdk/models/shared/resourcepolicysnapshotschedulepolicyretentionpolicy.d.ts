import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnPolicySwitchEnum {
    DoNotRetroactivelyApply = "DO_NOT_RETROACTIVELY_APPLY",
    RetroactivelyApply = "RETROACTIVELY_APPLY",
    UnspecifiedOnPolicySwitch = "UNSPECIFIED_ON_POLICY_SWITCH"
}
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
    onPolicySwitch?: ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnPolicySwitchEnum;
    /**
     * Specifies the behavior to apply to scheduled snapshots when the source disk is deleted.
     */
    onSourceDiskDelete?: ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum;
}
