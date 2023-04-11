import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The type of Open Measurement enabled inventory.
 */
export declare enum OmidTargetingOptionDetailsOmidEnum {
    OmidUnspecified = "OMID_UNSPECIFIED",
    OmidForMobileDisplayAds = "OMID_FOR_MOBILE_DISPLAY_ADS"
}
/**
 * Represents a targetable Open Measurement enabled inventory type. This will be populated in the omid_details field when targeting_type is `TARGETING_TYPE_OMID`.
 */
export declare class OmidTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Output only. The type of Open Measurement enabled inventory.
     */
    omid?: OmidTargetingOptionDetailsOmidEnum;
}
