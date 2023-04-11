import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The gender of the audience. Output only in v1. Required in v2.
 */
export declare enum GenderAssignedTargetingOptionDetailsGenderEnum {
    GenderUnspecified = "GENDER_UNSPECIFIED",
    GenderMale = "GENDER_MALE",
    GenderFemale = "GENDER_FEMALE",
    GenderUnknown = "GENDER_UNKNOWN"
}
/**
 * Details for assigned gender targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.
 */
export declare class GenderAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * The gender of the audience. Output only in v1. Required in v2.
     */
    gender?: GenderAssignedTargetingOptionDetailsGenderEnum;
    /**
     * Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_GENDER`.
     */
    targetingOptionId?: string;
}
