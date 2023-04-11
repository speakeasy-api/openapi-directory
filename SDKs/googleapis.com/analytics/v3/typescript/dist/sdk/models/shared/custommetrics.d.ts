import { SpeakeasyBase } from "../../../internal/utils";
import { CustomMetric } from "./custommetric";
/**
 * A custom metric collection lists Analytics custom metrics to which the user has access. Each resource in the collection corresponds to a single Analytics custom metric.
 */
export declare class CustomMetrics extends SpeakeasyBase {
    /**
     * Collection of custom metrics.
     */
    items?: CustomMetric[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number;
    /**
     * Collection type.
     */
    kind?: string;
    /**
     * Link to next page for this custom metric collection.
     */
    nextLink?: string;
    /**
     * Link to previous page for this custom metric collection.
     */
    previousLink?: string;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number;
    /**
     * The total number of results for the query, regardless of the number of results in the response.
     */
    totalResults?: number;
    /**
     * Email ID of the authenticated user
     */
    username?: string;
}
