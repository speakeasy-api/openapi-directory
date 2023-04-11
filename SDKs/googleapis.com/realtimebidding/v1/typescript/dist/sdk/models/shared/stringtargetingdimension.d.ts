import { SpeakeasyBase } from "../../../internal/utils";
/**
 * How the items in this list should be targeted.
 */
export declare enum StringTargetingDimensionTargetingModeEnum {
    TargetingModeUnspecified = "TARGETING_MODE_UNSPECIFIED",
    Inclusive = "INCLUSIVE",
    Exclusive = "EXCLUSIVE"
}
/**
 * Generic targeting with string values used in app, website and publisher targeting.
 */
export declare class StringTargetingDimension extends SpeakeasyBase {
    /**
     * How the items in this list should be targeted.
     */
    targetingMode?: StringTargetingDimensionTargetingModeEnum;
    /**
     * The values specified.
     */
    values?: string[];
}
