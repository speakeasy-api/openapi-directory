import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The quantitative measurements of a report. For example, the metric `accessCount` is the total number of data access records.
 */
export declare class GoogleAnalyticsAdminV1alphaAccessMetric extends SpeakeasyBase {
    /**
     * The API name of the metric. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of metrics supported in this API. Metrics are referenced by name in `metricFilter` & `orderBys`.
     */
    metricName?: string;
}
