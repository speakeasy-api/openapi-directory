import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies how the metric expression should be formatted, for example `INTEGER`.
 */
export declare enum MetricFormattingTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED",
    Integer = "INTEGER",
    Float = "FLOAT",
    Currency = "CURRENCY",
    Percent = "PERCENT",
    Time = "TIME"
}
/**
 * [Metrics](https://support.google.com/analytics/answer/1033861) are the quantitative measurements. For example, the metric `ga:users` indicates the total number of users for the requested time period.
 */
export declare class Metric extends SpeakeasyBase {
    /**
     * An alias for the metric expression is an alternate name for the expression. The alias can be used for filtering and sorting. This field is optional and is useful if the expression is not a single metric but a complex expression which cannot be used in filtering and sorting. The alias is also used in the response column header.
     */
    alias?: string;
    /**
     * A metric expression in the request. An expression is constructed from one or more metrics and numbers. Accepted operators include: Plus (+), Minus (-), Negation (Unary -), Divided by (/), Multiplied by (*), Parenthesis, Positive cardinal numbers (0-9), can include decimals and is limited to 1024 characters. Example `ga:totalRefunds/ga:users`, in most cases the metric expression is just a single metric name like `ga:users`. Adding mixed `MetricType` (E.g., `CURRENCY` + `PERCENTAGE`) metrics will result in unexpected results.
     */
    expression?: string;
    /**
     * Specifies how the metric expression should be formatted, for example `INTEGER`.
     */
    formattingType?: MetricFormattingTypeEnum;
}
