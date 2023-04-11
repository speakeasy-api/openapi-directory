import { SpeakeasyBase } from "../../../internal/utils";
import { DayPart } from "./daypart";
/**
 * The time zone type of the day parts
 */
export declare enum DayPartTargetingTimeZoneTypeEnum {
    TimeZoneTypeUnspecified = "TIME_ZONE_TYPE_UNSPECIFIED",
    Seller = "SELLER",
    User = "USER"
}
/**
 * Represents Daypart targeting.
 */
export declare class DayPartTargeting extends SpeakeasyBase {
    /**
     * The targeted weekdays and times
     */
    dayParts?: DayPart[];
    /**
     * The time zone type of the day parts
     */
    timeZoneType?: DayPartTargetingTimeZoneTypeEnum;
}
