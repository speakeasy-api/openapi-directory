import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Backup context.
 */
export declare class BackupContext extends SpeakeasyBase {
    /**
     * The identifier of the backup.
     */
    backupId?: string;
    /**
     * This is always `sql#backupContext`.
     */
    kind?: string;
}
