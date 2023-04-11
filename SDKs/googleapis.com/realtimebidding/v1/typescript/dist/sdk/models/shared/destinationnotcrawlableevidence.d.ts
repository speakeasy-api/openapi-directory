import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reason of destination not crawlable.
 */
export declare enum DestinationNotCrawlableEvidenceReasonEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED",
    UnreachableRobots = "UNREACHABLE_ROBOTS",
    TimeoutRobots = "TIMEOUT_ROBOTS",
    RobotedDenied = "ROBOTED_DENIED",
    Unknown = "UNKNOWN"
}
/**
 * Evidence that the creative's destination URL was not crawlable by Google.
 */
export declare class DestinationNotCrawlableEvidence extends SpeakeasyBase {
    /**
     * Approximate time of the crawl.
     */
    crawlTime?: string;
    /**
     * Destination URL that was attempted to be crawled.
     */
    crawledUrl?: string;
    /**
     * Reason of destination not crawlable.
     */
    reason?: DestinationNotCrawlableEvidenceReasonEnum;
}
