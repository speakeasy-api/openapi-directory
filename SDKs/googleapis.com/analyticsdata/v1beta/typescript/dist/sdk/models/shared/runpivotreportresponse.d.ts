import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionHeader } from "./dimensionheader";
import { MetricHeader } from "./metricheader";
import { PivotHeader } from "./pivotheader";
import { PropertyQuota } from "./propertyquota";
import { ResponseMetaData } from "./responsemetadata";
import { Row } from "./row";
/**
 * The response pivot report table corresponding to a pivot request.
 */
export declare class RunPivotReportResponse extends SpeakeasyBase {
    /**
     * Aggregation of metric values. Can be totals, minimums, or maximums. The returned aggregations are controlled by the metric_aggregations in the pivot. The type of aggregation returned in each row is shown by the dimension_values which are set to "RESERVED_".
     */
    aggregates?: Row[];
    /**
     * Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.
     */
    dimensionHeaders?: DimensionHeader[];
    /**
     * Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#runPivotReport". Useful to distinguish between response types in JSON.
     */
    kind?: string;
    /**
     * Response's metadata carrying additional information about the report content.
     */
    metadata?: ResponseMetaData;
    /**
     * Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.
     */
    metricHeaders?: MetricHeader[];
    /**
     * Summarizes the columns and rows created by a pivot. Each pivot in the request produces one header in the response. If we have a request like this: "pivots": [{ "fieldNames": ["country", "city"] }, { "fieldNames": "eventName" }] We will have the following `pivotHeaders` in the response: "pivotHeaders" : [{ "dimensionHeaders": [{ "dimensionValues": [ { "value": "United Kingdom" }, { "value": "London" } ] }, { "dimensionValues": [ { "value": "Japan" }, { "value": "Osaka" } ] }] }, { "dimensionHeaders": [{ "dimensionValues": [{ "value": "session_start" }] }, { "dimensionValues": [{ "value": "scroll" }] }] }]
     */
    pivotHeaders?: PivotHeader[];
    /**
     * Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
     */
    propertyQuota?: PropertyQuota;
    /**
     * Rows of dimension value combinations and metric values in the report.
     */
    rows?: Row[];
}
