import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
/**
 * Required. Indicates the day of the week this period ends on.
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
 * Required. Indicates the day of the week this period starts on.
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
     * Required. Indicates the day of the week this period ends on.
     */
    closeDay?: TimePeriodCloseDayEnum;
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    closeTime?: TimeOfDay;
    /**
     * Required. Indicates the day of the week this period starts on.
     */
    openDay?: TimePeriodOpenDayEnum;
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    openTime?: TimeOfDay;
}
