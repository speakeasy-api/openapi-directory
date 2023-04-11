import { SpeakeasyBase } from "../../../internal/utils";
export declare class McfDataColumnHeaders extends SpeakeasyBase {
    /**
     * Column Type. Either DIMENSION or METRIC.
     */
    columnType?: string;
    /**
     * Data type. Dimension and metric values data types such as INTEGER, DOUBLE, CURRENCY, MCF_SEQUENCE etc.
     */
    dataType?: string;
    /**
     * Column name.
     */
    name?: string;
}
/**
 * Information for the view (profile), for which the Analytics data was requested.
 */
export declare class McfDataProfileInfo extends SpeakeasyBase {
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
export declare class McfDataQuery extends SpeakeasyBase {
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
export declare class McfDataRowsConversionPathValue extends SpeakeasyBase {
    /**
     * Type of an interaction on conversion path. Such as CLICK, IMPRESSION etc.
     */
    interactionType?: string;
    /**
     * Node value of an interaction on conversion path. Such as source, medium etc.
     */
    nodeValue?: string;
}
/**
 * A union object representing a dimension or metric value. Only one of "primitiveValue" or "conversionPathValue" attribute will be populated.
 */
export declare class McfDataRows extends SpeakeasyBase {
    /**
     * A conversion path dimension value, containing a list of interactions with their attributes.
     */
    conversionPathValue?: McfDataRowsConversionPathValue[];
    /**
     * A primitive dimension value. A primitive metric value.
     */
    primitiveValue?: string;
}
/**
 * Multi-Channel Funnels data for a given view (profile).
 */
export declare class McfData extends SpeakeasyBase {
    /**
     * Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
     */
    columnHeaders?: McfDataColumnHeaders[];
    /**
     * Determines if the Analytics data contains sampled data.
     */
    containsSampledData?: boolean;
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
    profileInfo?: McfDataProfileInfo;
    /**
     * Analytics data request query parameters.
     */
    query?: McfDataQuery;
    /**
     * Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
     */
    rows?: McfDataRows[][];
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
