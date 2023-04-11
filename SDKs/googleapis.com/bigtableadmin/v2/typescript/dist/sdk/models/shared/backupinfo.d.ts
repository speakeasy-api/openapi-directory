import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a backup.
 */
export declare class BackupInfo extends SpeakeasyBase {
    /**
     * Output only. Name of the backup.
     */
    backup?: string;
    /**
     * Output only. This time that the backup was finished. Row data in the backup will be no newer than this timestamp.
     */
    endTime?: string;
    /**
     * Output only. Name of the backup from which this backup was copied. If a backup is not created by copying a backup, this field will be empty. Values are of the form: projects//instances//backups/.
     */
    sourceBackup?: string;
    /**
     * Output only. Name of the table the backup was created from.
     */
    sourceTable?: string;
    /**
     * Output only. The time that the backup was started. Row data in the backup will be no older than this timestamp.
     */
    startTime?: string;
}
