import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Absence period to create
 */
export declare class CreateTimeOffPeriodRequest extends SpeakeasyBase {
    /**
     * Optional comment
     */
    comment?: string;
    /**
     * Employee identifier
     */
    employeeId: number;
    /**
     * Absence end date as YYYY-MM-DD
     */
    endDate: Date;
    /**
     * Weather the end date is a half-day off
     */
    halfDayEnd: boolean;
    /**
     * Weather the start date is a half-day off
     */
    halfDayStart: boolean;
    /**
     * Absence start date as YYYY-MM-DD
     */
    startDate: Date;
    /**
     * Time-off type identifier
     */
    timeOffTypeId: number;
}
