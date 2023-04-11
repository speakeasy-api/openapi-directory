import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The quantitative measurements of a report. For example, the metric `eventCount` is the total number of events. Requests are allowed up to 10 metrics.
 */
export declare class Metric extends SpeakeasyBase {
    /**
     * A mathematical expression for derived metrics. For example, the metric Event count per user is `eventCount/totalUsers`.
     */
    expression?: string;
    /**
     * Indicates if a metric is invisible in the report response. If a metric is invisible, the metric will not produce a column in the response, but can be used in `metricFilter`, `orderBys`, or a metric `expression`.
     */
    invisible?: boolean;
    /**
     * The name of the metric. See the [API Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics) for the list of metric names. If `expression` is specified, `name` can be any string that you would like within the allowed character set. For example if `expression` is `screenPageViews/sessions`, you could call that metric's name = `viewsPerSession`. Metric names that you choose must match the regular expression `^[a-zA-Z0-9_]$`. Metrics are referenced by `name` in `metricFilter`, `orderBys`, and metric `expression`.
     */
    name?: string;
}
