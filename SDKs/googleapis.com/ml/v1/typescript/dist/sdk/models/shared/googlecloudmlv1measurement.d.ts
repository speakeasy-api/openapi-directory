import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1MeasurementMetric } from "./googlecloudmlv1measurementmetric";
/**
 * A message representing a measurement.
 */
export declare class GoogleCloudMlV1Measurement extends SpeakeasyBase {
    /**
     * Output only. Time that the trial has been running at the point of this measurement.
     */
    elapsedTime?: string;
    /**
     * Provides a list of metrics that act as inputs into the objective function.
     */
    metrics?: GoogleCloudMlV1MeasurementMetric[];
    /**
     * The number of steps a machine learning model has been trained for. Must be non-negative.
     */
    stepCount?: string;
}
