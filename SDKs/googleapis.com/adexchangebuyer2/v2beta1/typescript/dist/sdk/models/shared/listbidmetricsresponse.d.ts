import { SpeakeasyBase } from "../../../internal/utils";
import { BidMetricsRow } from "./bidmetricsrow";
/**
 * Response message for listing the metrics that are measured in number of bids.
 */
export declare class ListBidMetricsResponse extends SpeakeasyBase {
    /**
     * List of rows, each containing a set of bid metrics.
     */
    bidMetricsRows?: BidMetricsRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListBidMetricsRequest.pageToken field in the subsequent call to the bidMetrics.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
