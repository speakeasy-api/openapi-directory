import { SpeakeasyBase } from "../../../internal/utils";
export declare class GaDataColumnHeaders extends SpeakeasyBase {
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
export declare class GaDataDataTableCols extends SpeakeasyBase {
    id?: string;
    label?: string;
    type?: string;
}
export declare class GaDataDataTableRowsC extends SpeakeasyBase {
    v?: string;
}
export declare class GaDataDataTableRows extends SpeakeasyBase {
    c?: GaDataDataTableRowsC[];
}
export declare class GaDataDataTable extends SpeakeasyBase {
    cols?: GaDataDataTableCols[];
    rows?: GaDataDataTableRows[];
}
/**
 * Information for the view (profile), for which the Analytics data was requested.
 */
export declare class GaDataProfileInfo extends SpeakeasyBase {
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
 * Analytics data request query parameters.
 */
export declare class GaDataQuery extends SpeakeasyBase {
    /**
     * List of analytics dimensions.
     */
    dimensions?: string;
    /**
     * End date.
     */
    endDate?: string;
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
     * List of analytics metrics.
     */
    metrics?: string[];
    /**
     * Desired sampling level
     */
    samplingLevel?: string;
    /**
     * Analytics advanced segment.
     */
    segment?: string;
    /**
     * List of dimensions or metrics based on which Analytics data is sorted.
     */
    sort?: string[];
    /**
     * Start date.
     */
    startDate?: string;
    /**
     * Start index.
     */
    startIndex?: number;
}
/**
 * Analytics data for a given view (profile).
 */
export declare class GaData extends SpeakeasyBase {
    /**
     * Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
     */
    columnHeaders?: GaDataColumnHeaders[];
    /**
     * Determines if Analytics data contains samples.
     */
    containsSampledData?: boolean;
    /**
     * The last refreshed time in seconds for Analytics data.
     */
    dataLastRefreshed?: string;
    dataTable?: GaDataDataTable;
    /**
     * Unique ID for this data response.
     */
    id?: string;
    /**
     * The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number;
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * Link to next page for this Analytics data query.
     */
    nextLink?: string;
    /**
     * Link to previous page for this Analytics data query.
     */
    previousLink?: string;
    /**
     * Information for the view (profile), for which the Analytics data was requested.
     */
    profileInfo?: GaDataProfileInfo;
    /**
     * Analytics data request query parameters.
     */
    query?: GaDataQuery;
    /**
     * Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
     */
    rows?: string[][];
    /**
     * The number of samples used to calculate the result.
     */
    sampleSize?: string;
    /**
     * Total size of the sample space from which the samples were selected.
     */
    sampleSpace?: string;
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
