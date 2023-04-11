import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Day of the week.
 */
export declare enum WeeklyScheduleDayOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}
/**
 * Represents a weekly schedule.
 */
export declare class WeeklySchedule extends SpeakeasyBase {
    /**
     * Required. Day of the week.
     */
    dayOfWeek?: WeeklyScheduleDayOfWeekEnum;
}
