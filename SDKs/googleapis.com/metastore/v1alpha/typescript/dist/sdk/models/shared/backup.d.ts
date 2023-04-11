import { SpeakeasyBase } from "../../../internal/utils";
import { Service, ServiceInput } from "./service";
/**
 * Output only. The current state of the backup.
 */
export declare enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Deleting = "DELETING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Restoring = "RESTORING"
}
/**
 * The details of a backup resource.
 */
export declare class Backup extends SpeakeasyBase {
    /**
     * Output only. The time when the backup was started.
     */
    createTime?: string;
    /**
     * The description of the backup.
     */
    description?: string;
    /**
     * Output only. The time when the backup finished creating.
     */
    endTime?: string;
    /**
     * Immutable. The relative resource name of the backup, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id}
     */
    name?: string;
    /**
     * Output only. Services that are restoring from the backup.
     */
    restoringServices?: string[];
    /**
     * A managed metastore service that serves metadata queries.
     */
    serviceRevision?: Service;
    /**
     * Output only. The current state of the backup.
     */
    state?: BackupStateEnum;
}
/**
 * The details of a backup resource.
 */
export declare class BackupInput extends SpeakeasyBase {
    /**
     * The description of the backup.
     */
    description?: string;
    /**
     * Immutable. The relative resource name of the backup, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id}
     */
    name?: string;
    /**
     * A managed metastore service that serves metadata queries.
     */
    serviceRevision?: ServiceInput;
}
