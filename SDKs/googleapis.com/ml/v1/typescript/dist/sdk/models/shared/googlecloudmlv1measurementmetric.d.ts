import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A message representing a metric in the measurement.
 */
export declare class GoogleCloudMlV1MeasurementMetric extends SpeakeasyBase {
    /**
     * Required. Metric name.
     */
    metric?: string;
    /**
     * Required. The value for this metric.
     */
    value?: number;
}
