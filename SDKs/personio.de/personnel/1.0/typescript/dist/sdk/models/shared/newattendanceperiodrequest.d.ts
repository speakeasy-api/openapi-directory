import { SpeakeasyBase } from "../../../internal/utils";
export declare class NewAttendancePeriodRequestAttendances extends SpeakeasyBase {
    /**
     * Break in minutes
     */
    break: number;
    /**
     * Optional comment
     */
    comment: string;
    /**
     * Attendance date as YYYY-MM-DD
     */
    date: Date;
    /**
     * Employee identifier
     */
    employee: number;
    /**
     * End time as HH:MM
     */
    endTime: string;
    /**
     * Start time as HH:MM
     */
    startTime: string;
}
/**
 * List of attendance periods to create
 */
export declare class NewAttendancePeriodRequest extends SpeakeasyBase {
    attendances?: NewAttendancePeriodRequestAttendances[];
}
