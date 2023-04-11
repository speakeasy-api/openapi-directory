import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The time unit. Along with num_time_units defines the amount of time over which impressions per user are counted and capped.
 */
export declare enum FrequencyCapTimeUnitTypeEnum {
    TimeUnitTypeUnspecified = "TIME_UNIT_TYPE_UNSPECIFIED",
    Minute = "MINUTE",
    Hour = "HOUR",
    Day = "DAY",
    Week = "WEEK",
    Month = "MONTH",
    Lifetime = "LIFETIME",
    Pod = "POD",
    Stream = "STREAM"
}
/**
 * Message contains details about publisher-set frequency caps of the delivery.
 */
export declare class FrequencyCap extends SpeakeasyBase {
    /**
     * The maximum number of impressions that can be served to a user within the specified time period.
     */
    maxImpressions?: number;
    /**
     * The time unit. Along with num_time_units defines the amount of time over which impressions per user are counted and capped.
     */
    timeUnitType?: FrequencyCapTimeUnitTypeEnum;
    /**
     * The amount of time, in the units specified by time_unit_type. Defines the amount of time over which impressions per user are counted and capped.
     */
    timeUnitsCount?: number;
}
