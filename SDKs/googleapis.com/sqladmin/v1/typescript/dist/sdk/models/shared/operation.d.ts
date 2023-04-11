import { SpeakeasyBase } from "../../../internal/utils";
import { BackupContext } from "./backupcontext";
import { ExportContext } from "./exportcontext";
import { ImportContext } from "./importcontext";
import { OperationErrors } from "./operationerrors";
/**
 * The type of the operation. Valid values are: * `CREATE` * `DELETE` * `UPDATE` * `RESTART` * `IMPORT` * `EXPORT` * `BACKUP_VOLUME` * `RESTORE_VOLUME` * `CREATE_USER` * `DELETE_USER` * `CREATE_DATABASE` * `DELETE_DATABASE`
 */
export declare enum OperationOperationTypeEnum {
    SqlOperationTypeUnspecified = "SQL_OPERATION_TYPE_UNSPECIFIED",
    Import = "IMPORT",
    Export = "EXPORT",
    Create = "CREATE",
    Update = "UPDATE",
    Delete = "DELETE",
    Restart = "RESTART",
    Backup = "BACKUP",
    Snapshot = "SNAPSHOT",
    BackupVolume = "BACKUP_VOLUME",
    DeleteVolume = "DELETE_VOLUME",
    RestoreVolume = "RESTORE_VOLUME",
    InjectUser = "INJECT_USER",
    Clone = "CLONE",
    StopReplica = "STOP_REPLICA",
    StartReplica = "START_REPLICA",
    PromoteReplica = "PROMOTE_REPLICA",
    CreateReplica = "CREATE_REPLICA",
    CreateUser = "CREATE_USER",
    DeleteUser = "DELETE_USER",
    UpdateUser = "UPDATE_USER",
    CreateDatabase = "CREATE_DATABASE",
    DeleteDatabase = "DELETE_DATABASE",
    UpdateDatabase = "UPDATE_DATABASE",
    Failover = "FAILOVER",
    DeleteBackup = "DELETE_BACKUP",
    RecreateReplica = "RECREATE_REPLICA",
    TruncateLog = "TRUNCATE_LOG",
    DemoteMaster = "DEMOTE_MASTER",
    Maintenance = "MAINTENANCE",
    EnablePrivateIp = "ENABLE_PRIVATE_IP",
    DeferMaintenance = "DEFER_MAINTENANCE",
    CreateClone = "CREATE_CLONE",
    RescheduleMaintenance = "RESCHEDULE_MAINTENANCE",
    StartExternalSync = "START_EXTERNAL_SYNC",
    LogCleanup = "LOG_CLEANUP",
    AutoRestart = "AUTO_RESTART",
    Reencrypt = "REENCRYPT"
}
/**
 * The status of an operation.
 */
export declare enum OperationStatusEnum {
    SqlOperationStatusUnspecified = "SQL_OPERATION_STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Done = "DONE"
}
/**
 * An Operation resource. For successful operations that return an Operation resource, only the fields relevant to the operation are populated in the resource.
 */
export declare class Operation extends SpeakeasyBase {
    /**
     * Backup context.
     */
    backupContext?: BackupContext;
    /**
     * The time this operation finished in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    endTime?: string;
    /**
     * Database instance operation errors list wrapper.
     */
    error?: OperationErrors;
    /**
     * Database instance export context.
     */
    exportContext?: ExportContext;
    /**
     * Database instance import context.
     */
    importContext?: ImportContext;
    /**
     * The time this operation was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    insertTime?: string;
    /**
     * This is always `sql#operation`.
     */
    kind?: string;
    /**
     * An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
     */
    name?: string;
    /**
     * The type of the operation. Valid values are: * `CREATE` * `DELETE` * `UPDATE` * `RESTART` * `IMPORT` * `EXPORT` * `BACKUP_VOLUME` * `RESTORE_VOLUME` * `CREATE_USER` * `DELETE_USER` * `CREATE_DATABASE` * `DELETE_DATABASE`
     */
    operationType?: OperationOperationTypeEnum;
    /**
     * The URI of this resource.
     */
    selfLink?: string;
    /**
     * The time this operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    startTime?: string;
    /**
     * The status of an operation.
     */
    status?: OperationStatusEnum;
    /**
     * Name of the database instance related to this operation.
     */
    targetId?: string;
    targetLink?: string;
    /**
     * The project ID of the target instance related to this operation.
     */
    targetProject?: string;
    /**
     * The email address of the user who initiated this operation.
     */
    user?: string;
}
