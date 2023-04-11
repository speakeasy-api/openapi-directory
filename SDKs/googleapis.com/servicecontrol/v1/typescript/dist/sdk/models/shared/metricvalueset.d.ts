import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
/**
 * Represents a set of metric values in the same metric. Each metric value in the set should have a unique combination of start time, end time, and label values.
 */
export declare class MetricValueSet extends SpeakeasyBase {
    /**
     * The metric name defined in the service configuration.
     */
    metricName?: string;
    /**
     * The values in this metric.
     */
    metricValues?: MetricValue[];
}
