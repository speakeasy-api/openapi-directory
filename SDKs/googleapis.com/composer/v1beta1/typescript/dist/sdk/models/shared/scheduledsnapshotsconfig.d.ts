import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for scheduled snapshot creation mechanism.
 */
export declare class ScheduledSnapshotsConfig extends SpeakeasyBase {
    /**
     * Optional. Whether scheduled snapshots creation is enabled.
     */
    enabled?: boolean;
    /**
     * Optional. The cron expression representing the time when snapshots creation mechanism runs. This field is subject to additional validation around frequency of execution.
     */
    snapshotCreationSchedule?: string;
    /**
     * Optional. The Cloud Storage location for storing automatically created snapshots.
     */
    snapshotLocation?: string;
    /**
     * Optional. Time zone that sets the context to interpret snapshot_creation_schedule.
     */
    timeZone?: string;
}
