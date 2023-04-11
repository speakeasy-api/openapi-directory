import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Upcoming maintenance schedule.
 */
export declare class MaintenanceSchedule extends SpeakeasyBase {
    /**
     * Output only. The end time of any upcoming scheduled maintenance for this instance.
     */
    endTime?: string;
    /**
     * Output only. The deadline that the maintenance schedule start time can not go beyond, including reschedule.
     */
    scheduleDeadlineTime?: string;
    /**
     * Output only. The start time of any upcoming scheduled maintenance for this instance.
     */
    startTime?: string;
}
