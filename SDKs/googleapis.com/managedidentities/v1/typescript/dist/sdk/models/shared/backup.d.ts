import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The current state of the backup.
 */
export declare enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deleting = "DELETING"
}
/**
 * Output only. Indicates whether it’s an on-demand backup or scheduled.
 */
export declare enum BackupTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    OnDemand = "ON_DEMAND",
    Scheduled = "SCHEDULED"
}
/**
 * Represents a Managed Microsoft Identities backup.
 */
export declare class Backup extends SpeakeasyBase {
    /**
     * Output only. The time the backups was created.
     */
    createTime?: string;
    /**
     * Optional. Resource labels to represent user provided metadata.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The unique name of the Backup in the form of `projects/{project_id}/locations/global/domains/{domain_name}/backups/{name}`
     */
    name?: string;
    /**
     * Output only. The current state of the backup.
     */
    state?: BackupStateEnum;
    /**
     * Output only. Additional information about the current status of this backup, if available.
     */
    statusMessage?: string;
    /**
     * Output only. Indicates whether it’s an on-demand backup or scheduled.
     */
    type?: BackupTypeEnum;
    /**
     * Output only. Last update time.
     */
    updateTime?: string;
}
/**
 * Represents a Managed Microsoft Identities backup.
 */
export declare class BackupInput extends SpeakeasyBase {
    /**
     * Optional. Resource labels to represent user provided metadata.
     */
    labels?: Record<string, string>;
}
