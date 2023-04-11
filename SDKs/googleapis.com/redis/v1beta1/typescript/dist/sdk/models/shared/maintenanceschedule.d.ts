import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.
 */
export declare class MaintenanceScheduleInput extends SpeakeasyBase {
    /**
     * If the scheduled maintenance can be rescheduled, default is true.
     */
    canReschedule?: boolean;
}
/**
 * Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.
 */
export declare class MaintenanceSchedule extends SpeakeasyBase {
    /**
     * If the scheduled maintenance can be rescheduled, default is true.
     */
    canReschedule?: boolean;
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
