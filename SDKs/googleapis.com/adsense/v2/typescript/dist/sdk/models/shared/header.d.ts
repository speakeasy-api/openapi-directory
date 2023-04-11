import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Type of the header.
 */
export declare enum HeaderTypeEnum {
    HeaderTypeUnspecified = "HEADER_TYPE_UNSPECIFIED",
    Dimension = "DIMENSION",
    MetricTally = "METRIC_TALLY",
    MetricRatio = "METRIC_RATIO",
    MetricCurrency = "METRIC_CURRENCY",
    MetricMilliseconds = "METRIC_MILLISECONDS",
    MetricDecimal = "METRIC_DECIMAL"
}
/**
 * The header information of the columns requested in the report.
 */
export declare class Header extends SpeakeasyBase {
    /**
     * The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) of this column. Only present if the header type is METRIC_CURRENCY.
     */
    currencyCode?: string;
    /**
     * Required. Name of the header.
     */
    name?: string;
    /**
     * Required. Type of the header.
     */
    type?: HeaderTypeEnum;
}
