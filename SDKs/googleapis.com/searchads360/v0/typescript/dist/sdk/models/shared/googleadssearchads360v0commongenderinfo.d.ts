import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the gender.
 */
export declare enum GoogleAdsSearchads360V0CommonGenderInfoTypeEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Male = "MALE",
    Female = "FEMALE",
    Undetermined = "UNDETERMINED"
}
/**
 * A gender criterion.
 */
export declare class GoogleAdsSearchads360V0CommonGenderInfo extends SpeakeasyBase {
    /**
     * Type of the gender.
     */
    type?: GoogleAdsSearchads360V0CommonGenderInfoTypeEnum;
}
