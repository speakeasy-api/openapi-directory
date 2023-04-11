import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the listing group.
 */
export declare enum GoogleAdsSearchads360V0CommonListingGroupInfoTypeEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Subdivision = "SUBDIVISION",
    Unit = "UNIT"
}
/**
 * A listing group criterion.
 */
export declare class GoogleAdsSearchads360V0CommonListingGroupInfo extends SpeakeasyBase {
    /**
     * Type of the listing group.
     */
    type?: GoogleAdsSearchads360V0CommonListingGroupInfoTypeEnum;
}
