import { SpeakeasyBase } from "../../../internal/utils";
/**
 * attendance period data to update
 */
export declare class UpdateAttendancePeriodRequest extends SpeakeasyBase {
    /**
     * Break in minutes
     */
    break?: number;
    /**
     * Optional comment
     */
    comment?: string;
    /**
     * Attendance date as YYYY-MM-DD
     */
    date?: Date;
    /**
     * End time as HH:MM
     */
    endTime?: string;
    /**
     * Start time as HH:MM
     */
    startTime?: string;
}
