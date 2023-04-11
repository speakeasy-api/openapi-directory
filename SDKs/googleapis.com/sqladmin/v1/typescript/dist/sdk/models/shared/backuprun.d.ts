import { SpeakeasyBase } from "../../../internal/utils";
import { DiskEncryptionConfiguration } from "./diskencryptionconfiguration";
import { DiskEncryptionStatus } from "./diskencryptionstatus";
import { OperationError } from "./operationerror";
/**
 * Specifies the kind of backup, PHYSICAL or DEFAULT_SNAPSHOT.
 */
export declare enum BackupRunBackupKindEnum {
    SqlBackupKindUnspecified = "SQL_BACKUP_KIND_UNSPECIFIED",
    Snapshot = "SNAPSHOT",
    Physical = "PHYSICAL"
}
/**
 * The status of this run.
 */
export declare enum BackupRunStatusEnum {
    SqlBackupRunStatusUnspecified = "SQL_BACKUP_RUN_STATUS_UNSPECIFIED",
    Enqueued = "ENQUEUED",
    Overdue = "OVERDUE",
    Running = "RUNNING",
    Failed = "FAILED",
    Successful = "SUCCESSFUL",
    Skipped = "SKIPPED",
    DeletionPending = "DELETION_PENDING",
    DeletionFailed = "DELETION_FAILED",
    Deleted = "DELETED"
}
/**
 * The type of this run; can be either "AUTOMATED" or "ON_DEMAND" or "FINAL". This field defaults to "ON_DEMAND" and is ignored, when specified for insert requests.
 */
export declare enum BackupRunTypeEnum {
    SqlBackupRunTypeUnspecified = "SQL_BACKUP_RUN_TYPE_UNSPECIFIED",
    Automated = "AUTOMATED",
    OnDemand = "ON_DEMAND"
}
/**
 * A BackupRun resource.
 */
export declare class BackupRun extends SpeakeasyBase {
    /**
     * Specifies the kind of backup, PHYSICAL or DEFAULT_SNAPSHOT.
     */
    backupKind?: BackupRunBackupKindEnum;
    /**
     * The description of this run, only applicable to on-demand backups.
     */
    description?: string;
    /**
     * Disk encryption configuration for an instance.
     */
    diskEncryptionConfiguration?: DiskEncryptionConfiguration;
    /**
     * Disk encryption status for an instance.
     */
    diskEncryptionStatus?: DiskEncryptionStatus;
    /**
     * The time the backup operation completed in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    endTime?: string;
    /**
     * The time the run was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    enqueuedTime?: string;
    /**
     * Database instance operation error.
     */
    error?: OperationError;
    /**
     * The identifier for this backup run. Unique only for a specific Cloud SQL instance.
     */
    id?: string;
    /**
     * Name of the database instance.
     */
    instance?: string;
    /**
     * This is always `sql#backupRun`.
     */
    kind?: string;
    /**
     * Location of the backups.
     */
    location?: string;
    /**
     * The URI of this resource.
     */
    selfLink?: string;
    /**
     * The time the backup operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    startTime?: string;
    /**
     * The status of this run.
     */
    status?: BackupRunStatusEnum;
    /**
     * Backup time zone to prevent restores to an instance with a different time zone. Now relevant only for SQL Server.
     */
    timeZone?: string;
    /**
     * The type of this run; can be either "AUTOMATED" or "ON_DEMAND" or "FINAL". This field defaults to "ON_DEMAND" and is ignored, when specified for insert requests.
     */
    type?: BackupRunTypeEnum;
    /**
     * The start time of the backup window during which this the backup was attempted in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    windowStartTime?: string;
}
