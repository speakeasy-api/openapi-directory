import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
import { TimeRange } from "./timerange";
/**
 * The day of the week ("MONDAY" to "SUNDAY") this value corresponds to. Set for BREAKDOWN_DAY_OF_WEEK option.
 */
export declare enum TimeDimensionDayOfWeekEnum {
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
 * The dimension for which data is divided over.
 */
export declare class TimeDimension extends SpeakeasyBase {
    /**
     * The day of the week ("MONDAY" to "SUNDAY") this value corresponds to. Set for BREAKDOWN_DAY_OF_WEEK option.
     */
    dayOfWeek?: TimeDimensionDayOfWeekEnum;
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    timeOfDay?: TimeOfDay;
    /**
     * A range of time. Data will be pulled over the range as a half-open inverval (that is, [start_time, end_time)).
     */
    timeRange?: TimeRange;
}
