import { SpeakeasyBase } from "../../../internal/utils";
import { WeekDayOfMonth } from "./weekdayofmonth";
/**
 * Represents a monthly schedule. An example of a valid monthly schedule is "on the third Tuesday of the month" or "on the 15th of the month".
 */
export declare class MonthlySchedule extends SpeakeasyBase {
    /**
     * Required. One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month. Months without the target day will be skipped. For example, a schedule to run "every month on the 31st" will not run in February, April, June, etc.
     */
    monthDay?: number;
    /**
     * Represents one week day in a month. An example is "the 4th Sunday".
     */
    weekDayOfMonth?: WeekDayOfMonth;
}
