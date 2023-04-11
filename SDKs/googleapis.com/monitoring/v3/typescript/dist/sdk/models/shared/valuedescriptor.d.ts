import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The value stream kind.
 */
export declare enum ValueDescriptorMetricKindEnum {
    MetricKindUnspecified = "METRIC_KIND_UNSPECIFIED",
    Gauge = "GAUGE",
    Delta = "DELTA",
    Cumulative = "CUMULATIVE"
}
/**
 * The value type.
 */
export declare enum ValueDescriptorValueTypeEnum {
    ValueTypeUnspecified = "VALUE_TYPE_UNSPECIFIED",
    Bool = "BOOL",
    Int64 = "INT64",
    Double = "DOUBLE",
    String = "STRING",
    Distribution = "DISTRIBUTION",
    Money = "MONEY"
}
/**
 * A descriptor for the value columns in a data point.
 */
export declare class ValueDescriptor extends SpeakeasyBase {
    /**
     * The value key.
     */
    key?: string;
    /**
     * The value stream kind.
     */
    metricKind?: ValueDescriptorMetricKindEnum;
    /**
     * The unit in which time_series point values are reported. unit follows the UCUM format for units as seen in https://unitsofmeasure.org/ucum.html. unit is only valid if value_type is INTEGER, DOUBLE, DISTRIBUTION.
     */
    unit?: string;
    /**
     * The value type.
     */
    valueType?: ValueDescriptorValueTypeEnum;
}
