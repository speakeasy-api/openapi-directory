import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates the day of the week this period ends on.
 */
export declare enum TimePeriodCloseDayEnum {
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
 * Indicates the day of the week this period starts on.
 */
export declare enum TimePeriodOpenDayEnum {
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
 * Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day.
 */
export declare class TimePeriod extends SpeakeasyBase {
    /**
     * Indicates the day of the week this period ends on.
     */
    closeDay?: TimePeriodCloseDayEnum;
    /**
     * Time in 24hr ISO 8601 extended format (hh:mm). Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field.
     */
    closeTime?: string;
    /**
     * Indicates the day of the week this period starts on.
     */
    openDay?: TimePeriodOpenDayEnum;
    /**
     * Time in 24hr ISO 8601 extended format (hh:mm). Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field.
     */
    openTime?: string;
}
