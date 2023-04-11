import { SpeakeasyBase } from "../../../internal/utils";
import { RestoreConfig } from "./restoreconfig";
/**
 * Represents both a request to Restore some portion of a Backup into a target GKE cluster and a record of the restore operation itself. Next id: 18
 */
export declare class RestoreInput extends SpeakeasyBase {
    /**
     * Required. Immutable. A reference to the Backup used as the source from which this Restore will restore. Note that this Backup must be a sub-resource of the RestorePlan's backup_plan. Format: `projects/* /locations/* /backupPlans/* /backups/*`.
     */
    backup?: string;
    /**
     * User specified descriptive string for this Restore.
     */
    description?: string;
    /**
     * A set of custom labels supplied by user.
     */
    labels?: Record<string, string>;
    /**
     * Configuration of a restore. Next id: 12
     */
    restoreConfig?: RestoreConfig;
}
/**
 * Output only. The current state of the Restore.
 */
export declare enum RestoreStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Deleting = "DELETING"
}
/**
 * Represents both a request to Restore some portion of a Backup into a target GKE cluster and a record of the restore operation itself. Next id: 18
 */
export declare class Restore extends SpeakeasyBase {
    /**
     * Required. Immutable. A reference to the Backup used as the source from which this Restore will restore. Note that this Backup must be a sub-resource of the RestorePlan's backup_plan. Format: `projects/* /locations/* /backupPlans/* /backups/*`.
     */
    backup?: string;
    /**
     * Output only. The target cluster into which this Restore will restore data. Valid formats: - `projects/* /locations/* /clusters/*` - `projects/* /zones/* /clusters/*` Inherited from parent RestorePlan's cluster value.
     */
    cluster?: string;
    /**
     * Output only. Timestamp of when the restore operation completed.
     */
    completeTime?: string;
    /**
     * Output only. The timestamp when this Restore resource was created.
     */
    createTime?: string;
    /**
     * User specified descriptive string for this Restore.
     */
    description?: string;
    /**
     * Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a restore from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform restore updates in order to avoid race conditions: An `etag` is returned in the response to `GetRestore`, and systems are expected to put that etag in the request to `UpdateRestore` or `DeleteRestore` to ensure that their change will be applied to the same version of the resource.
     */
    etag?: string;
    /**
     * A set of custom labels supplied by user.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The full name of the Restore resource. Format: `projects/* /locations/* /restorePlans/* /restores/*`
     */
    name?: string;
    /**
     * Output only. Number of resources excluded during the restore execution.
     */
    resourcesExcludedCount?: number;
    /**
     * Output only. Number of resources that failed to be restored during the restore execution.
     */
    resourcesFailedCount?: number;
    /**
     * Output only. Number of resources restored during the restore execution.
     */
    resourcesRestoredCount?: number;
    /**
     * Configuration of a restore. Next id: 12
     */
    restoreConfig?: RestoreConfig;
    /**
     * Output only. The current state of the Restore.
     */
    state?: RestoreStateEnum;
    /**
     * Output only. Human-readable description of why the Restore is in its current state.
     */
    stateReason?: string;
    /**
     * Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.
     */
    uid?: string;
    /**
     * Output only. The timestamp when this Restore resource was last updated.
     */
    updateTime?: string;
    /**
     * Output only. Number of volumes restored during the restore execution.
     */
    volumesRestoredCount?: number;
}
