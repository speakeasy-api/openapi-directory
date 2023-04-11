import { SpeakeasyBase } from "../../../internal/utils";
export declare class RealtimeDataColumnHeaders extends SpeakeasyBase {
    /**
     * Column Type. Either DIMENSION or METRIC.
     */
    columnType?: string;
    /**
     * Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric values such as INTEGER, DOUBLE, CURRENCY etc.
     */
    dataType?: string;
    /**
     * Column name.
     */
    name?: string;
}
/**
 * Information for the view (profile), for which the real time data was requested.
 */
export declare class RealtimeDataProfileInfo extends SpeakeasyBase {
    /**
     * Account ID to which this view (profile) belongs.
     */
    accountId?: string;
    /**
     * Internal ID for the web property to which this view (profile) belongs.
     */
    internalWebPropertyId?: string;
    /**
     * View (Profile) ID.
     */
    profileId?: string;
    /**
     * View (Profile) name.
     */
    profileName?: string;
    /**
     * Table ID for view (profile).
     */
    tableId?: string;
    /**
     * Web Property ID to which this view (profile) belongs.
     */
    webPropertyId?: string;
}
/**
 * Real time data request query parameters.
 */
export declare class RealtimeDataQuery extends SpeakeasyBase {
    /**
     * List of real time dimensions.
     */
    dimensions?: string;
    /**
     * Comma-separated list of dimension or metric filters.
     */
    filters?: string;
    /**
     * Unique table ID.
     */
    ids?: string;
    /**
     * Maximum results per page.
     */
    maxResults?: number;
    /**
     * List of real time metrics.
     */
    metrics?: string[];
    /**
     * List of dimensions or metrics based on which real time data is sorted.
     */
    sort?: string[];
}
/**
 * Real time data for a given view (profile).
 */
export declare class RealtimeData extends SpeakeasyBase {
    /**
     * Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
     */
    columnHeaders?: RealtimeDataColumnHeaders[];
    /**
     * Unique ID for this data response.
     */
    id?: string;
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * Information for the view (profile), for which the real time data was requested.
     */
    profileInfo?: RealtimeDataProfileInfo;
    /**
     * Real time data request query parameters.
     */
    query?: RealtimeDataQuery;
    /**
     * Real time data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
     */
    rows?: string[][];
    /**
     * Link to this page.
     */
    selfLink?: string;
    /**
     * The total number of rows for the query, regardless of the number of rows in the response.
     */
    totalResults?: number;
    /**
     * Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.
     */
    totalsForAllResults?: Record<string, string>;
}
