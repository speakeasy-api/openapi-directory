import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Day of the week. Allowed values are Sunday - Saturday.
 */
export declare enum WeekDayMetricsDayEnum {
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
 * Metrics for a week day.
 */
export declare class WeekDayMetrics extends SpeakeasyBase {
    /**
     * Day of the week. Allowed values are Sunday - Saturday.
     */
    day?: WeekDayMetricsDayEnum;
    /**
     * Total count of missed calls for this hour.
     */
    missedCallsCount?: number;
}
