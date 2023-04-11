import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the Ad URL.
 */
export declare enum AdUrlTypeEnum {
    AdUrlTypeUnspecified = "AD_URL_TYPE_UNSPECIFIED",
    AdUrlTypeBeaconImpression = "AD_URL_TYPE_BEACON_IMPRESSION",
    AdUrlTypeBeaconExpandableDcmImpression = "AD_URL_TYPE_BEACON_EXPANDABLE_DCM_IMPRESSION",
    AdUrlTypeBeaconClick = "AD_URL_TYPE_BEACON_CLICK",
    AdUrlTypeBeaconSkip = "AD_URL_TYPE_BEACON_SKIP"
}
/**
 * Additional URLs related to the ad, including beacons.
 */
export declare class AdUrl extends SpeakeasyBase {
    /**
     * The type of the Ad URL.
     */
    type?: AdUrlTypeEnum;
    /**
     * The URL string value.
     */
    url?: string;
}
