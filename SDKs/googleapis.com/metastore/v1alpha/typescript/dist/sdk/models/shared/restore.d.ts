import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The current state of the restore.
 */
export declare enum RestoreStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}
/**
 * Output only. The type of restore.
 */
export declare enum RestoreTypeEnum {
    RestoreTypeUnspecified = "RESTORE_TYPE_UNSPECIFIED",
    Full = "FULL",
    MetadataOnly = "METADATA_ONLY"
}
/**
 * The details of a metadata restore operation.
 */
export declare class Restore extends SpeakeasyBase {
    /**
     * Output only. The relative resource name of the metastore service backup to restore from, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}.
     */
    backup?: string;
    /**
     * Output only. The restore details containing the revision of the service to be restored to, in format of JSON.
     */
    details?: string;
    /**
     * Output only. The time when the restore ended.
     */
    endTime?: string;
    /**
     * Output only. The time when the restore started.
     */
    startTime?: string;
    /**
     * Output only. The current state of the restore.
     */
    state?: RestoreStateEnum;
    /**
     * Output only. The type of restore.
     */
    type?: RestoreTypeEnum;
}
