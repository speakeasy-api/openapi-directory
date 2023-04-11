import { SpeakeasyBase } from "../../../internal/utils";
import { RestoreConfig } from "./restoreconfig";
/**
 * The configuration of a potential series of Restore operations to be performed against Backups belong to a particular BackupPlan. Next id: 13
 */
export declare class RestorePlan extends SpeakeasyBase {
    /**
     * Required. Immutable. A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan. Format: `projects/* /locations/* /backupPlans/*`.
     */
    backupPlan?: string;
    /**
     * Required. Immutable. The target cluster into which Restores created via this RestorePlan will restore data. NOTE: the cluster's region must be the same as the RestorePlan. Valid formats: - `projects/* /locations/* /clusters/*` - `projects/* /zones/* /clusters/*`
     */
    cluster?: string;
    /**
     * Output only. The timestamp when this RestorePlan resource was created.
     */
    createTime?: string;
    /**
     * User specified descriptive string for this RestorePlan.
     */
    description?: string;
    /**
     * Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a restore from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform restore updates in order to avoid race conditions: An `etag` is returned in the response to `GetRestorePlan`, and systems are expected to put that etag in the request to `UpdateRestorePlan` or `DeleteRestorePlan` to ensure that their change will be applied to the same version of the resource.
     */
    etag?: string;
    /**
     * A set of custom labels supplied by user.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The full name of the RestorePlan resource. Format: `projects/* /locations/* /restorePlans/*`.
     */
    name?: string;
    /**
     * Configuration of a restore. Next id: 12
     */
    restoreConfig?: RestoreConfig;
    /**
     * Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.
     */
    uid?: string;
    /**
     * Output only. The timestamp when this RestorePlan resource was last updated.
     */
    updateTime?: string;
}
/**
 * The configuration of a potential series of Restore operations to be performed against Backups belong to a particular BackupPlan. Next id: 13
 */
export declare class RestorePlanInput extends SpeakeasyBase {
    /**
     * Required. Immutable. A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan. Format: `projects/* /locations/* /backupPlans/*`.
     */
    backupPlan?: string;
    /**
     * Required. Immutable. The target cluster into which Restores created via this RestorePlan will restore data. NOTE: the cluster's region must be the same as the RestorePlan. Valid formats: - `projects/* /locations/* /clusters/*` - `projects/* /zones/* /clusters/*`
     */
    cluster?: string;
    /**
     * User specified descriptive string for this RestorePlan.
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
