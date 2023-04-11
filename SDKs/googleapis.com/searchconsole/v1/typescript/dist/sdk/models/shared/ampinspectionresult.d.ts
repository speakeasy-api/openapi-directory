import { SpeakeasyBase } from "../../../internal/utils";
import { AmpIssue } from "./ampissue";
/**
 * Index status of the AMP URL.
 */
export declare enum AmpInspectionResultAmpIndexStatusVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED",
    Pass = "PASS",
    Partial = "PARTIAL",
    Fail = "FAIL",
    Neutral = "NEUTRAL"
}
/**
 * Whether or not the page blocks indexing through a noindex rule.
 */
export declare enum AmpInspectionResultIndexingStateEnum {
    AmpIndexingStateUnspecified = "AMP_INDEXING_STATE_UNSPECIFIED",
    AmpIndexingAllowed = "AMP_INDEXING_ALLOWED",
    BlockedDueToNoindex = "BLOCKED_DUE_TO_NOINDEX",
    BlockedDueToExpiredUnavailableAfter = "BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER"
}
/**
 * Whether or not Google could fetch the AMP.
 */
export declare enum AmpInspectionResultPageFetchStateEnum {
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
export declare enum AmpInspectionResultRobotsTxtStateEnum {
    RobotsTxtStateUnspecified = "ROBOTS_TXT_STATE_UNSPECIFIED",
    Allowed = "ALLOWED",
    Disallowed = "DISALLOWED"
}
/**
 * The status of the most severe error on the page. If a page has both warnings and errors, the page status is error. Error status means the page cannot be shown in Search results.
 */
export declare enum AmpInspectionResultVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED",
    Pass = "PASS",
    Partial = "PARTIAL",
    Fail = "FAIL",
    Neutral = "NEUTRAL"
}
/**
 * AMP inspection result of the live page or the current information from Google's index, depending on whether you requested a live inspection or not.
 */
export declare class AmpInspectionResult extends SpeakeasyBase {
    /**
     * Index status of the AMP URL.
     */
    ampIndexStatusVerdict?: AmpInspectionResultAmpIndexStatusVerdictEnum;
    /**
     * URL of the AMP that was inspected. If the submitted URL is a desktop page that refers to an AMP version, the AMP version will be inspected.
     */
    ampUrl?: string;
    /**
     * Whether or not the page blocks indexing through a noindex rule.
     */
    indexingState?: AmpInspectionResultIndexingStateEnum;
    /**
     * A list of zero or more AMP issues found for the inspected URL.
     */
    issues?: AmpIssue[];
    /**
     * Last time this AMP version was crawled by Google. Absent if the URL was never crawled successfully.
     */
    lastCrawlTime?: string;
    /**
     * Whether or not Google could fetch the AMP.
     */
    pageFetchState?: AmpInspectionResultPageFetchStateEnum;
    /**
     * Whether or not the page is blocked to Google by a robots.txt rule.
     */
    robotsTxtState?: AmpInspectionResultRobotsTxtStateEnum;
    /**
     * The status of the most severe error on the page. If a page has both warnings and errors, the page status is error. Error status means the page cannot be shown in Search results.
     */
    verdict?: AmpInspectionResultVerdictEnum;
}
