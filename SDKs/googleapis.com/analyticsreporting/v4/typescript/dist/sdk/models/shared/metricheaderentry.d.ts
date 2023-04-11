import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the metric, for example `INTEGER`.
 */
export declare enum MetricHeaderEntryTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED",
    Integer = "INTEGER",
    Float = "FLOAT",
    Currency = "CURRENCY",
    Percent = "PERCENT",
    Time = "TIME"
}
/**
 * Header for the metrics.
 */
export declare class MetricHeaderEntry extends SpeakeasyBase {
    /**
     * The name of the header.
     */
    name?: string;
    /**
     * The type of the metric, for example `INTEGER`.
     */
    type?: MetricHeaderEntryTypeEnum;
}
