import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DayPartTargetingDaysOfWeekEnum {
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}
/**
 * Day Part Targeting.
 */
export declare class DayPartTargeting extends SpeakeasyBase {
    /**
     * Days of the week when the ad will serve. Acceptable values are: - "SUNDAY" - "MONDAY" - "TUESDAY" - "WEDNESDAY" - "THURSDAY" - "FRIDAY" - "SATURDAY"
     */
    daysOfWeek?: DayPartTargetingDaysOfWeekEnum[];
    /**
     * Hours of the day when the ad will serve, where 0 is midnight to 1 AM and 23 is 11 PM to midnight. Can be specified with days of week, in which case the ad would serve during these hours on the specified days. For example if Monday, Wednesday, Friday are the days of week specified and 9-10am, 3-5pm (hours 9, 15, and 16) is specified, the ad would serve Monday, Wednesdays, and Fridays at 9-10am and 3-5pm. Acceptable values are 0 to 23, inclusive.
     */
    hoursOfDay?: number[];
    /**
     * Whether or not to use the user's local time. If false, the America/New York time zone applies.
     */
    userLocalTime?: boolean;
}
