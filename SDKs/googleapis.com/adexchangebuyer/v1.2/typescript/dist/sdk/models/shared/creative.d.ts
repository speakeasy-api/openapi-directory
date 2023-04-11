import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreativeCorrections extends SpeakeasyBase {
    /**
     * Additional details about the correction.
     */
    details?: string[];
    /**
     * The type of correction that was applied to the creative.
     */
    reason?: string;
}
export declare class CreativeDisapprovalReasons extends SpeakeasyBase {
    /**
     * Additional details about the reason for disapproval.
     */
    details?: string[];
    /**
     * The categorized reason for disapproval.
     */
    reason?: string;
}
export declare class CreativeFilteringReasonsReasons extends SpeakeasyBase {
    /**
     * The number of times the creative was filtered for the status. The count is aggregated across all publishers on the exchange.
     */
    filteringCount?: string;
    /**
     * The filtering status code. Please refer to the creative-status-codes.txt file for different statuses.
     */
    filteringStatus?: number;
}
/**
 * The filtering reasons for the creative. Read-only. This field should not be set in requests.
 */
export declare class CreativeFilteringReasons extends SpeakeasyBase {
    /**
     * The date in ISO 8601 format for the data. The data is collected from 00:00:00 to 23:59:59 in PST.
     */
    date?: string;
    /**
     * The filtering reasons.
     */
    reasons?: CreativeFilteringReasonsReasons[];
}
/**
 * A creative and its classification data.
 */
export declare class Creative extends SpeakeasyBase {
    /**
     * The HTML snippet that displays the ad when inserted in the web page. If set, videoURL should not be set.
     */
    htmlSnippet?: string;
    /**
     * Account id.
     */
    accountId?: number;
    /**
     * Detected advertiser id, if any. Read-only. This field should not be set in requests.
     */
    advertiserId?: string[];
    /**
     * The name of the company being advertised in the creative.
     */
    advertiserName?: string;
    /**
     * The agency id for this creative.
     */
    agencyId?: string;
    /**
     * The last upload timestamp of this creative if it was uploaded via API. Read-only. The value of this field is generated, and will be ignored for uploads. (formatted RFC 3339 timestamp).
     */
    apiUploadTimestamp?: Date;
    /**
     * All attributes for the ads that may be shown from this snippet.
     */
    attribute?: number[];
    /**
     * A buyer-specific id identifying the creative in this ad.
     */
    buyerCreativeId?: string;
    /**
     * The set of destination urls for the snippet.
     */
    clickThroughUrl?: string[];
    /**
     * Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests.
     */
    corrections?: CreativeCorrections[];
    /**
     * The reasons for disapproval, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue. Read-only. This field should not be set in requests.
     */
    disapprovalReasons?: CreativeDisapprovalReasons[];
    /**
     * The filtering reasons for the creative. Read-only. This field should not be set in requests.
     */
    filteringReasons?: CreativeFilteringReasons;
    /**
     * Ad height.
     */
    height?: number;
    /**
     * The set of urls to be called to record an impression.
     */
    impressionTrackingUrl?: string[];
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * Detected product categories, if any. Read-only. This field should not be set in requests.
     */
    productCategories?: number[];
    /**
     * All restricted categories for the ads that may be shown from this snippet.
     */
    restrictedCategories?: number[];
    /**
     * Detected sensitive categories, if any. Read-only. This field should not be set in requests.
     */
    sensitiveCategories?: number[];
    /**
     * Creative serving status. Read-only. This field should not be set in requests.
     */
    status?: string;
    /**
     * All vendor types for the ads that may be shown from this snippet.
     */
    vendorType?: number[];
    /**
     * The version for this creative. Read-only. This field should not be set in requests.
     */
    version?: number;
    /**
     * The url to fetch a video ad. If set, HTMLSnippet should not be set.
     */
    videoURL?: string;
    /**
     * Ad width.
     */
    width?: number;
}
