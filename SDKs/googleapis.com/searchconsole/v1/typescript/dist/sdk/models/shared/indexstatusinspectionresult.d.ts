import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Primary crawler that was used by Google to crawl your site.
 */
export declare enum IndexStatusInspectionResultCrawledAsEnum {
    CrawlingUserAgentUnspecified = "CRAWLING_USER_AGENT_UNSPECIFIED",
    Desktop = "DESKTOP",
    Mobile = "MOBILE"
}
/**
 * Whether or not the page blocks indexing through a noindex rule.
 */
export declare enum IndexStatusInspectionResultIndexingStateEnum {
    IndexingStateUnspecified = "INDEXING_STATE_UNSPECIFIED",
    IndexingAllowed = "INDEXING_ALLOWED",
    BlockedByMetaTag = "BLOCKED_BY_META_TAG",
    BlockedByHttpHeader = "BLOCKED_BY_HTTP_HEADER",
    BlockedByRobotsTxt = "BLOCKED_BY_ROBOTS_TXT"
}
/**
 * Whether or not Google could retrieve the page from your server. Equivalent to ["page fetch"](https://support.google.com/webmasters/answer/9012289#index_coverage) in the URL inspection report.
 */
export declare enum IndexStatusInspectionResultPageFetchStateEnum {
    PageFetchStateUnspecified = "PAGE_FETCH_STATE_UNSPECIFIED",
    Successful = "SUCCESSFUL",
    Soft404 = "SOFT_404",
    BlockedRobotsTxt = "BLOCKED_ROBOTS_TXT",
    NotFound = "NOT_FOUND",
    AccessDenied = "ACCESS_DENIED",
    ServerError = "SERVER_ERROR",
    RedirectError = "REDIRECT_ERROR",
    AccessForbidden = "ACCESS_FORBIDDEN",
    Blocked4Xx = "BLOCKED_4XX",
    InternalCrawlError = "INTERNAL_CRAWL_ERROR",
    InvalidUrl = "INVALID_URL"
}
/**
 * Whether or not the page is blocked to Google by a robots.txt rule.
 */
export declare enum IndexStatusInspectionResultRobotsTxtStateEnum {
    RobotsTxtStateUnspecified = "ROBOTS_TXT_STATE_UNSPECIFIED",
    Allowed = "ALLOWED",
    Disallowed = "DISALLOWED"
}
/**
 * High level verdict about whether the URL *is* indexed (indexed status), or *can be* indexed (live inspection).
 */
export declare enum IndexStatusInspectionResultVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED",
    Pass = "PASS",
    Partial = "PARTIAL",
    Fail = "FAIL",
    Neutral = "NEUTRAL"
}
/**
 * Results of index status inspection for either the live page or the version in Google's index, depending on whether you requested a live inspection or not. For more information, see the [Index coverage report documentation](https://support.google.com/webmasters/answer/7440203).
 */
export declare class IndexStatusInspectionResult extends SpeakeasyBase {
    /**
     * Could Google find and index the page. More details about page indexing appear in 'indexing_state'.
     */
    coverageState?: string;
    /**
     * Primary crawler that was used by Google to crawl your site.
     */
    crawledAs?: IndexStatusInspectionResultCrawledAsEnum;
    /**
     * The URL of the page that Google selected as canonical. If the page was not indexed, this field is absent.
     */
    googleCanonical?: string;
    /**
     * Whether or not the page blocks indexing through a noindex rule.
     */
    indexingState?: IndexStatusInspectionResultIndexingStateEnum;
    /**
     * Last time this URL was crawled by Google using the [primary crawler](https://support.google.com/webmasters/answer/7440203#primary_crawler). Absent if the URL was never crawled successfully.
     */
    lastCrawlTime?: string;
    /**
     * Whether or not Google could retrieve the page from your server. Equivalent to ["page fetch"](https://support.google.com/webmasters/answer/9012289#index_coverage) in the URL inspection report.
     */
    pageFetchState?: IndexStatusInspectionResultPageFetchStateEnum;
    /**
     * URLs that link to the inspected URL, directly and indirectly.
     */
    referringUrls?: string[];
    /**
     * Whether or not the page is blocked to Google by a robots.txt rule.
     */
    robotsTxtState?: IndexStatusInspectionResultRobotsTxtStateEnum;
    /**
     * Any sitemaps that this URL was listed in, as known by Google. Not guaranteed to be an exhaustive list, especially if Google did not discover this URL through a sitemap. Absent if no sitemaps were found.
     */
    sitemap?: string[];
    /**
     * The URL that your page or site [declares as canonical](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls?#define-canonical). If you did not declare a canonical URL, this field is absent.
     */
    userCanonical?: string;
    /**
     * High level verdict about whether the URL *is* indexed (indexed status), or *can be* indexed (live inspection).
     */
    verdict?: IndexStatusInspectionResultVerdictEnum;
}
