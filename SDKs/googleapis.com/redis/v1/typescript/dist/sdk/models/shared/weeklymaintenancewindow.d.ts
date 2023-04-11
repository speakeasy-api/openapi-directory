import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
/**
 * Required. The day of week that maintenance updates occur.
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
 * Time window in which disruptive maintenance updates occur. Non-disruptive updates can occur inside or outside this window.
 */
export declare class WeeklyMaintenanceWindowInput extends SpeakeasyBase {
    /**
     * Required. The day of week that maintenance updates occur.
     */
    day?: WeeklyMaintenanceWindowDayEnum;
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    startTime?: TimeOfDay;
}
/**
 * Time window in which disruptive maintenance updates occur. Non-disruptive updates can occur inside or outside this window.
 */
export declare class WeeklyMaintenanceWindow extends SpeakeasyBase {
    /**
     * Required. The day of week that maintenance updates occur.
     */
    day?: WeeklyMaintenanceWindowDayEnum;
    /**
     * Output only. Duration of the maintenance window. The current window is fixed at 1 hour.
     */
    duration?: string;
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    startTime?: TimeOfDay;
}
