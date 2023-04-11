import { SpeakeasyBase } from "../../../internal/utils";
import { Distribution } from "./distribution";
import { Money } from "./money";
/**
 * Represents a single metric value.
 */
export declare class MetricValue extends SpeakeasyBase {
    /**
     * A boolean value.
     */
    boolValue?: boolean;
    /**
     * Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information: * the arithmetic mean of the samples * the minimum and maximum of the samples * the sum-squared-deviation of the samples, used to compute variance * a histogram of the values of the sample points
     */
    distributionValue?: Distribution;
    /**
     * A double precision floating point value.
     */
    doubleValue?: number;
    /**
     * The end of the time period over which this metric value's measurement applies. If not specified, google.api.servicecontrol.v1.Operation.end_time will be used.
     */
    endTime?: string;
    /**
     * A signed 64-bit integer value.
     */
    int64Value?: string;
    /**
     * The labels describing the metric value. See comments on google.api.servicecontrol.v1.Operation.labels for the overriding relationship. Note that this map must not contain monitored resource labels.
     */
    labels?: Record<string, string>;
    /**
     * Represents an amount of money with its currency type.
     */
    moneyValue?: Money;
    /**
     * The start of the time period over which this metric value's measurement applies. The time period has different semantics for different metric types (cumulative, delta, and gauge). See the metric definition documentation in the service configuration for details. If not specified, google.api.servicecontrol.v1.Operation.start_time will be used.
     */
    startTime?: string;
    /**
     * A text string value.
     */
    stringValue?: string;
}
