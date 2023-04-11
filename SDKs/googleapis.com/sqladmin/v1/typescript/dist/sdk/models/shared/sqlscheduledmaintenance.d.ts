import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Any scheduled maintenance for this instance.
 */
export declare class SqlScheduledMaintenance extends SpeakeasyBase {
    canDefer?: boolean;
    /**
     * If the scheduled maintenance can be rescheduled.
     */
    canReschedule?: boolean;
    /**
     * Maintenance cannot be rescheduled to start beyond this deadline.
     */
    scheduleDeadlineTime?: string;
    /**
     * The start time of any upcoming scheduled maintenance for this instance.
     */
    startTime?: string;
}
