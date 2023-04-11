import { SpeakeasyBase } from "../../../internal/utils";
import { ImpressionMetricsRow } from "./impressionmetricsrow";
/**
 * Response message for listing the metrics that are measured in number of impressions.
 */
export declare class ListImpressionMetricsResponse extends SpeakeasyBase {
    /**
     * List of rows, each containing a set of impression metrics.
     */
    impressionMetricsRows?: ImpressionMetricsRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListImpressionMetricsRequest.pageToken field in the subsequent call to the impressionMetrics.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
