import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the age range.
 */
export declare enum GoogleAdsSearchads360V0CommonAgeRangeInfoTypeEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    AgeRange1824 = "AGE_RANGE_18_24",
    AgeRange2534 = "AGE_RANGE_25_34",
    AgeRange3544 = "AGE_RANGE_35_44",
    AgeRange4554 = "AGE_RANGE_45_54",
    AgeRange5564 = "AGE_RANGE_55_64",
    AgeRange65Up = "AGE_RANGE_65_UP",
    AgeRangeUndetermined = "AGE_RANGE_UNDETERMINED"
}
/**
 * An age range criterion.
 */
export declare class GoogleAdsSearchads360V0CommonAgeRangeInfo extends SpeakeasyBase {
    /**
     * Type of the age range.
     */
    type?: GoogleAdsSearchads360V0CommonAgeRangeInfoTypeEnum;
}
