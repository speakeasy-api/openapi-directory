import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
/**
 * Required. Allows to define schedule that runs specified day of the week.
 */
export declare enum WeeklyMaintenanceWindowDayEnum {
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
 * Time window specified for weekly operations.
 */
export declare class WeeklyMaintenanceWindow extends SpeakeasyBase {
    /**
     * Required. Allows to define schedule that runs specified day of the week.
     */
    day?: WeeklyMaintenanceWindowDayEnum;
    /**
     * Required. Duration of the time window.
     */
    duration?: string;
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    startTime?: TimeOfDay;
}
