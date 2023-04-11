import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Schedule defines scheduling parameters for automatically creating Backups via this BackupPlan.
 */
export declare class Schedule extends SpeakeasyBase {
    /**
     * A standard [cron](https://wikipedia.com/wiki/cron) string that defines a repeating schedule for creating Backups via this BackupPlan. If this is defined, then backup_retain_days must also be defined. Default (empty): no automatic backup creation will occur.
     */
    cronSchedule?: string;
    /**
     * This flag denotes whether automatic Backup creation is paused for this BackupPlan. Default: False
     */
    paused?: boolean;
}
