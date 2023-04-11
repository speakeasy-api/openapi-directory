import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The site's Ad Experience Report status on this platform.
 */
export declare enum PlatformSummaryBetterAdsStatusEnum {
    Unknown = "UNKNOWN",
    Passing = "PASSING",
    Warning = "WARNING",
    Failing = "FAILING"
}
/**
 * The site's [enforcement status](https://support.google.com/webtools/answer/7308033) on this platform.
 */
export declare enum PlatformSummaryFilterStatusEnum {
    Unknown = "UNKNOWN",
    On = "ON",
    Off = "OFF",
    Paused = "PAUSED",
    Pending = "PENDING"
}
export declare enum PlatformSummaryRegionEnum {
    RegionUnknown = "REGION_UNKNOWN",
    RegionA = "REGION_A",
    RegionB = "REGION_B",
    RegionC = "REGION_C"
}
/**
 * A site's Ad Experience Report summary on a single platform.
 */
export declare class PlatformSummary extends SpeakeasyBase {
    /**
     * The site's Ad Experience Report status on this platform.
     */
    betterAdsStatus?: PlatformSummaryBetterAdsStatusEnum;
    /**
     * The time at which [enforcement](https://support.google.com/webtools/answer/7308033) against the site began or will begin on this platform. Not set when the filter_status is OFF.
     */
    enforcementTime?: string;
    /**
     * The site's [enforcement status](https://support.google.com/webtools/answer/7308033) on this platform.
     */
    filterStatus?: PlatformSummaryFilterStatusEnum;
    /**
     * The time at which the site's status last changed on this platform.
     */
    lastChangeTime?: string;
    /**
     * The site's regions on this platform. No longer populated, because there is no longer any semantic difference between sites in different regions.
     */
    region?: PlatformSummaryRegionEnum[];
    /**
     * A link to the full Ad Experience Report for the site on this platform.. Not set in ViolatingSitesResponse. Note that you must complete the [Search Console verification process](https://support.google.com/webmasters/answer/9008080) for the site before you can access the full report.
     */
    reportUrl?: string;
    /**
     * Whether the site is currently under review on this platform.
     */
    underReview?: boolean;
}
