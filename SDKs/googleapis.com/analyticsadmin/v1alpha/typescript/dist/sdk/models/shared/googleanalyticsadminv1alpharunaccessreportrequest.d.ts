import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessDateRange } from "./googleanalyticsadminv1alphaaccessdaterange";
import { GoogleAnalyticsAdminV1alphaAccessDimension } from "./googleanalyticsadminv1alphaaccessdimension";
import { GoogleAnalyticsAdminV1alphaAccessFilterExpression } from "./googleanalyticsadminv1alphaaccessfilterexpression";
import { GoogleAnalyticsAdminV1alphaAccessMetric } from "./googleanalyticsadminv1alphaaccessmetric";
import { GoogleAnalyticsAdminV1alphaAccessOrderBy } from "./googleanalyticsadminv1alphaaccessorderby";
/**
 * The request for a Data Access Record Report.
 */
export declare class GoogleAnalyticsAdminV1alphaRunAccessReportRequest extends SpeakeasyBase {
    /**
     * Date ranges of access records to read. If multiple date ranges are requested, each response row will contain a zero based date range index. If two date ranges overlap, the access records for the overlapping days is included in the response rows for both date ranges. Requests are allowed up to 2 date ranges.
     */
    dateRanges?: GoogleAnalyticsAdminV1alphaAccessDateRange[];
    /**
     * Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics.
     */
    dimensionFilter?: GoogleAnalyticsAdminV1alphaAccessFilterExpression;
    /**
     * The dimensions requested and displayed in the response. Requests are allowed up to 9 dimensions.
     */
    dimensions?: GoogleAnalyticsAdminV1alphaAccessDimension[];
    /**
     * The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 100,000 rows per request, no matter how many you ask for. `limit` must be positive. The API may return fewer rows than the requested `limit`, if there aren't as many remaining rows as the `limit`. For instance, there are fewer than 300 possible values for the dimension `country`, so when reporting on only `country`, you can't get more than 300 rows, even if you set `limit` to a higher value. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
     */
    limit?: string;
    /**
     * Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics.
     */
    metricFilter?: GoogleAnalyticsAdminV1alphaAccessFilterExpression;
    /**
     * The metrics requested and displayed in the response. Requests are allowed up to 10 metrics.
     */
    metrics?: GoogleAnalyticsAdminV1alphaAccessMetric[];
    /**
     * The row count of the start row. The first row is counted as row 0. If offset is unspecified, it is treated as 0. If offset is zero, then this method will return the first page of results with `limit` entries. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
     */
    offset?: string;
    /**
     * Specifies how rows are ordered in the response.
     */
    orderBys?: GoogleAnalyticsAdminV1alphaAccessOrderBy[];
    /**
     * Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [AccessQuota](#AccessQuota). For account-level requests, this field must be false.
     */
    returnEntityQuota?: boolean;
    /**
     * This request's time zone if specified. If unspecified, the property's time zone is used. The request's time zone is used to interpret the start & end dates of the report. Formatted as strings from the IANA Time Zone database (https://www.iana.org/time-zones); for example "America/New_York" or "Asia/Tokyo".
     */
    timeZone?: string;
}
