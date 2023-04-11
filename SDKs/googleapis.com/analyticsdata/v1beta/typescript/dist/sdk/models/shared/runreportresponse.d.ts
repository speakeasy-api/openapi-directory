import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionHeader } from "./dimensionheader";
import { MetricHeader } from "./metricheader";
import { PropertyQuota } from "./propertyquota";
import { ResponseMetaData } from "./responsemetadata";
import { Row } from "./row";
/**
 * The response report table corresponding to a request.
 */
export declare class RunReportResponse extends SpeakeasyBase {
    /**
     * Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.
     */
    dimensionHeaders?: DimensionHeader[];
    /**
     * Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#runReport". Useful to distinguish between response types in JSON.
     */
    kind?: string;
    /**
     * If requested, the maximum values of metrics.
     */
    maximums?: Row[];
    /**
     * Response's metadata carrying additional information about the report content.
     */
    metadata?: ResponseMetaData;
    /**
     * Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.
     */
    metricHeaders?: MetricHeader[];
    /**
     * If requested, the minimum values of metrics.
     */
    minimums?: Row[];
    /**
     * Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
     */
    propertyQuota?: PropertyQuota;
    /**
     * The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
     */
    rowCount?: number;
    /**
     * Rows of dimension value combinations and metric values in the report.
     */
    rows?: Row[];
    /**
     * If requested, the totaled values of metrics.
     */
    totals?: Row[];
}
