import { SpeakeasyBase } from "../../../internal/utils";
import { BackupRetentionSettings } from "./backupretentionsettings";
/**
 * Database instance backup configuration.
 */
export declare class BackupConfiguration extends SpeakeasyBase {
    /**
     * We currently only support backup retention by specifying the number of backups we will retain.
     */
    backupRetentionSettings?: BackupRetentionSettings;
    /**
     * (MySQL only) Whether binary log is enabled. If backup configuration is disabled, binarylog must be disabled as well.
     */
    binaryLogEnabled?: boolean;
    /**
     * Whether this configuration is enabled.
     */
    enabled?: boolean;
    /**
     * This is always `sql#backupConfiguration`.
     */
    kind?: string;
    /**
     * Location of the backup
     */
    location?: string;
    /**
     * (Postgres only) Whether point in time recovery is enabled.
     */
    pointInTimeRecoveryEnabled?: boolean;
    /**
     * Reserved for future use.
     */
    replicationLogArchivingEnabled?: boolean;
    /**
     * Start time for the daily backup configuration in UTC timezone in the 24 hour format - `HH:MM`.
     */
    startTime?: string;
    /**
     * The number of days of transaction logs we retain for point in time restore, from 1-7.
     */
    transactionLogRetentionDays?: number;
}
