import { SpeakeasyBase } from "../../../internal/utils";
import { DayPart } from "./daypart";
/**
 * The timezone to use for interpreting the day part targeting.
 */
export declare enum DayPartTargetingTimeZoneTypeEnum {
    TimeZoneSourceUnspecified = "TIME_ZONE_SOURCE_UNSPECIFIED",
    Publisher = "PUBLISHER",
    User = "USER"
}
/**
 * Specifies the day part targeting criteria.
 */
export declare class DayPartTargeting extends SpeakeasyBase {
    /**
     * A list of day part targeting criterion.
     */
    dayParts?: DayPart[];
    /**
     * The timezone to use for interpreting the day part targeting.
     */
    timeZoneType?: DayPartTargetingTimeZoneTypeEnum;
}
