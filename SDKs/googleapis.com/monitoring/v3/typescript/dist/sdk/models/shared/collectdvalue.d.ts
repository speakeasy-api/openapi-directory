import { SpeakeasyBase } from "../../../internal/utils";
import { TypedValue } from "./typedvalue";
/**
 * The type of measurement.
 */
export declare enum CollectdValueDataSourceTypeEnum {
    UnspecifiedDataSourceType = "UNSPECIFIED_DATA_SOURCE_TYPE",
    Gauge = "GAUGE",
    Counter = "COUNTER",
    Derive = "DERIVE",
    Absolute = "ABSOLUTE"
}
/**
 * A single data point from a collectd-based plugin.
 */
export declare class CollectdValue extends SpeakeasyBase {
    /**
     * The data source for the collectd value. For example, there are two data sources for network measurements: "rx" and "tx".
     */
    dataSourceName?: string;
    /**
     * The type of measurement.
     */
    dataSourceType?: CollectdValueDataSourceTypeEnum;
    /**
     * A single strongly-typed value.
     */
    value?: TypedValue;
}
