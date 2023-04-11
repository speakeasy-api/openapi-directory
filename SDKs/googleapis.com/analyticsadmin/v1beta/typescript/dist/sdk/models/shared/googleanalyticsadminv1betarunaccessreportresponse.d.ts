import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaAccessDimensionHeader } from "./googleanalyticsadminv1betaaccessdimensionheader";
import { GoogleAnalyticsAdminV1betaAccessMetricHeader } from "./googleanalyticsadminv1betaaccessmetricheader";
import { GoogleAnalyticsAdminV1betaAccessQuota } from "./googleanalyticsadminv1betaaccessquota";
import { GoogleAnalyticsAdminV1betaAccessRow } from "./googleanalyticsadminv1betaaccessrow";
/**
 * The customized Data Access Record Report response.
 */
export declare class GoogleAnalyticsAdminV1betaRunAccessReportResponse extends SpeakeasyBase {
    /**
     * The header for a column in the report that corresponds to a specific dimension. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.
     */
    dimensionHeaders?: GoogleAnalyticsAdminV1betaAccessDimensionHeader[];
    /**
     * The header for a column in the report that corresponds to a specific metric. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.
     */
    metricHeaders?: GoogleAnalyticsAdminV1betaAccessMetricHeader[];
    /**
     * Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
     */
    quota?: GoogleAnalyticsAdminV1betaAccessQuota;
    /**
     * The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
     */
    rowCount?: number;
    /**
     * Rows of dimension value combinations and metric values in the report.
     */
    rows?: GoogleAnalyticsAdminV1betaAccessRow[];
}
