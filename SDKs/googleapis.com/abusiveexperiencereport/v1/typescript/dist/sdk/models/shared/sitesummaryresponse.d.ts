import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The site's Abusive Experience Report status.
 */
export declare enum SiteSummaryResponseAbusiveStatusEnum {
    Unknown = "UNKNOWN",
    Passing = "PASSING",
    Failing = "FAILING"
}
/**
 * The site's [enforcement status](https://support.google.com/webtools/answer/7538608).
 */
export declare enum SiteSummaryResponseFilterStatusEnum {
    Unknown = "UNKNOWN",
    On = "ON",
    Off = "OFF",
    Paused = "PAUSED",
    Pending = "PENDING"
}
/**
 * Response message for GetSiteSummary.
 */
export declare class SiteSummaryResponse extends SpeakeasyBase {
    /**
     * The site's Abusive Experience Report status.
     */
    abusiveStatus?: SiteSummaryResponseAbusiveStatusEnum;
    /**
     * The time at which [enforcement](https://support.google.com/webtools/answer/7538608) against the site began or will begin. Not set when the filter_status is OFF.
     */
    enforcementTime?: string;
    /**
     * The site's [enforcement status](https://support.google.com/webtools/answer/7538608).
     */
    filterStatus?: SiteSummaryResponseFilterStatusEnum;
    /**
     * The time at which the site's status last changed.
     */
    lastChangeTime?: string;
    /**
     * A link to the full Abusive Experience Report for the site. Not set in ViolatingSitesResponse. Note that you must complete the [Search Console verification process](https://support.google.com/webmasters/answer/9008080) for the site before you can access the full report.
     */
    reportUrl?: string;
    /**
     * The name of the reviewed site, e.g. `google.com`.
     */
    reviewedSite?: string;
    /**
     * Whether the site is currently under review.
     */
    underReview?: boolean;
}
