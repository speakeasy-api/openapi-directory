import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of Open Measurement enabled inventory. Output only in v1. Required in v2.
 */
export declare enum OmidAssignedTargetingOptionDetailsOmidEnum {
    OmidUnspecified = "OMID_UNSPECIFIED",
    OmidForMobileDisplayAds = "OMID_FOR_MOBILE_DISPLAY_ADS"
}
/**
 * Represents a targetable Open Measurement enabled inventory type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_OMID`.
 */
export declare class OmidAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * The type of Open Measurement enabled inventory. Output only in v1. Required in v2.
     */
    omid?: OmidAssignedTargetingOptionDetailsOmidEnum;
    /**
     * Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_OMID`.
     */
    targetingOptionId?: string;
}
