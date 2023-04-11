import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The targeted location on the search results page.
 */
export declare enum GoogleAdsSearchads360V0CommonTargetImpressionShareLocationEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    AnywhereOnPage = "ANYWHERE_ON_PAGE",
    TopOfPage = "TOP_OF_PAGE",
    AbsoluteTopOfPage = "ABSOLUTE_TOP_OF_PAGE"
}
/**
 * An automated bidding strategy that sets bids so that a certain percentage of search ads are shown at the top of the first page (or other targeted location).
 */
export declare class GoogleAdsSearchads360V0CommonTargetImpressionShare extends SpeakeasyBase {
    /**
     * The highest CPC bid the automated bidding system is permitted to specify. This is a required field entered by the advertiser that sets the ceiling and specified in local micros.
     */
    cpcBidCeilingMicros?: string;
    /**
     * The targeted location on the search results page.
     */
    location?: GoogleAdsSearchads360V0CommonTargetImpressionShareLocationEnum;
    /**
     * The chosen fraction of ads to be shown in the targeted location in micros. For example, 1% equals 10,000.
     */
    locationFractionMicros?: string;
}
