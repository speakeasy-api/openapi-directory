import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Real-time bidding metrics. For what each metric means refer to [Report metrics](https://support.google.com/adxbuyer/answer/6115195#report-metrics)
 */
export declare class RtbMetrics extends SpeakeasyBase {
    /**
     * Ad impressions in last 7 days.
     */
    adImpressions7Days?: string;
    /**
     * Bid rate in last 7 days, calculated by (bids / bid requests).
     */
    bidRate7Days?: number;
    /**
     * Bid requests in last 7 days.
     */
    bidRequests7Days?: string;
    /**
     * Bids in last 7 days.
     */
    bids7Days?: string;
    /**
     * Filtered bid rate in last 7 days, calculated by (filtered bids / bids).
     */
    filteredBidRate7Days?: number;
    /**
     * Must bid rate for current month.
     */
    mustBidRateCurrentMonth?: number;
}
