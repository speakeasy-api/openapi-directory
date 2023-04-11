import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The day of the week for this day and time targeting setting.
 */
export declare enum DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum {
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
 * Required. The mechanism used to determine which timezone to use for this day and time targeting setting.
 */
export declare enum DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum {
    TimeZoneResolutionUnspecified = "TIME_ZONE_RESOLUTION_UNSPECIFIED",
    TimeZoneResolutionEndUser = "TIME_ZONE_RESOLUTION_END_USER",
    TimeZoneResolutionAdvertiser = "TIME_ZONE_RESOLUTION_ADVERTISER"
}
/**
 * Representation of a segment of time defined on a specific day of the week and with a start and end time. The time represented by `start_hour` must be before the time represented by `end_hour`.
 */
export declare class DayAndTimeAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Required. The day of the week for this day and time targeting setting.
     */
    dayOfWeek?: DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum;
    /**
     * Required. The end hour for day and time targeting. Must be between 1 (1 hour after start of day) and 24 (end of day).
     */
    endHour?: number;
    /**
     * Required. The start hour for day and time targeting. Must be between 0 (start of day) and 23 (1 hour before end of day).
     */
    startHour?: number;
    /**
     * Required. The mechanism used to determine which timezone to use for this day and time targeting setting.
     */
    timeZoneResolution?: DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum;
}
