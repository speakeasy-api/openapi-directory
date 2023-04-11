import { SpeakeasyBase } from "../../../internal/utils";
import { ResourcePolicySnapshotSchedulePolicyRetentionPolicy } from "./resourcepolicysnapshotschedulepolicyretentionpolicy";
import { ResourcePolicySnapshotSchedulePolicySchedule } from "./resourcepolicysnapshotschedulepolicyschedule";
import { ResourcePolicySnapshotSchedulePolicySnapshotProperties } from "./resourcepolicysnapshotschedulepolicysnapshotproperties";
/**
 * A snapshot schedule policy specifies when and how frequently snapshots are to be created for the target disk. Also specifies how many and how long these scheduled snapshots should be retained.
 */
export declare class ResourcePolicySnapshotSchedulePolicy extends SpeakeasyBase {
    /**
     * Policy for retention of scheduled snapshots.
     */
    retentionPolicy?: ResourcePolicySnapshotSchedulePolicyRetentionPolicy;
    /**
     * A schedule for disks where the schedueled operations are performed.
     */
    schedule?: ResourcePolicySnapshotSchedulePolicySchedule;
    /**
     * Specified snapshot properties for scheduled snapshots created by this policy.
     */
    snapshotProperties?: ResourcePolicySnapshotSchedulePolicySnapshotProperties;
}
