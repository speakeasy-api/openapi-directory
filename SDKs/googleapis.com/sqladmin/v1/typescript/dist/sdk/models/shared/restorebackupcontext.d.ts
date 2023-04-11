import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Database instance restore from backup context. Backup context contains source instance id and project id.
 */
export declare class RestoreBackupContext extends SpeakeasyBase {
    /**
     * The ID of the backup run to restore from.
     */
    backupRunId?: string;
    /**
     * The ID of the instance that the backup was taken from.
     */
    instanceId?: string;
    /**
     * This is always `sql#restoreBackupContext`.
     */
    kind?: string;
    /**
     * The full project ID of the source instance.
     */
    project?: string;
}
