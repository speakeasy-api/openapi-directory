import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeSize } from "./creativesize";
import { DayPartTargeting } from "./dayparttargeting";
/**
 * A polymorphic targeting value used as part of Shared Targeting.
 */
export declare class TargetingValue extends SpeakeasyBase {
    /**
     * Specifies the size of the creative.
     */
    creativeSizeValue?: CreativeSize;
    /**
     * Specifies the day part targeting criteria.
     */
    dayPartTargetingValue?: DayPartTargeting;
    /**
     * The long value to include/exclude.
     */
    longValue?: string;
    /**
     * The string value to include/exclude.
     */
    stringValue?: string;
}
