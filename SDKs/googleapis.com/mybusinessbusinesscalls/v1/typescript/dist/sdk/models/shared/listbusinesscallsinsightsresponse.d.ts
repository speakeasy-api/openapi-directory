import { SpeakeasyBase } from "../../../internal/utils";
import { BusinessCallsInsights } from "./businesscallsinsights";
/**
 * Response message for ListBusinessCallsInsights.
 */
export declare class ListBusinessCallsInsightsResponse extends SpeakeasyBase {
    /**
     * A collection of business calls insights for the location.
     */
    businessCallsInsights?: BusinessCallsInsights[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Some of the metric_types (e.g, AGGREGATE_COUNT) returns a single page. For these metrics, the next_page_token will be empty.
     */
    nextPageToken?: string;
}
