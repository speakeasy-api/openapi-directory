import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration data for an Ad Exchange performance report list.
 */
export declare class PerformanceReport extends SpeakeasyBase {
    /**
     * The number of bid responses with an ad.
     */
    bidRate?: number;
    /**
     * The number of bid requests sent to your bidder.
     */
    bidRequestRate?: number;
    /**
     * Rate of various prefiltering statuses per match. Please refer to the callout-status-codes.txt file for different statuses.
     */
    calloutStatusRate?: any[];
    /**
     * Average QPS for cookie matcher operations.
     */
    cookieMatcherStatusRate?: any[];
    /**
     * Rate of ads with a given status. Please refer to the creative-status-codes.txt file for different statuses.
     */
    creativeStatusRate?: any[];
    /**
     * The number of bid responses that were filtered due to a policy violation or other errors.
     */
    filteredBidRate?: number;
    /**
     * Average QPS for hosted match operations.
     */
    hostedMatchStatusRate?: any[];
    /**
     * The number of potential queries based on your pretargeting settings.
     */
    inventoryMatchRate?: number;
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * The 50th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
     */
    latency50thPercentile?: number;
    /**
     * The 85th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
     */
    latency85thPercentile?: number;
    /**
     * The 95th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
     */
    latency95thPercentile?: number;
    /**
     * Rate of various quota account statuses per quota check.
     */
    noQuotaInRegion?: number;
    /**
     * Rate of various quota account statuses per quota check.
     */
    outOfQuota?: number;
    /**
     * Average QPS for pixel match requests from clients.
     */
    pixelMatchRequests?: number;
    /**
     * Average QPS for pixel match responses from clients.
     */
    pixelMatchResponses?: number;
    /**
     * The configured quota limits for this account.
     */
    quotaConfiguredLimit?: number;
    /**
     * The throttled quota limits for this account.
     */
    quotaThrottledLimit?: number;
    /**
     * The trading location of this data.
     */
    region?: string;
    /**
     * The number of properly formed bid responses received by our servers within the deadline.
     */
    successfulRequestRate?: number;
    /**
     * The unix timestamp of the starting time of this performance data.
     */
    timestamp?: string;
    /**
     * The number of bid responses that were unsuccessful due to timeouts, incorrect formatting, etc.
     */
    unsuccessfulRequestRate?: number;
}
