import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics } from "./googleclouddocumentaiv1beta3evaluationconfidencelevelmetrics";
/**
 * The metrics type for the label.
 */
export declare enum GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum {
    MetricsTypeUnspecified = "METRICS_TYPE_UNSPECIFIED",
    Aggregate = "AGGREGATE"
}
/**
 * Metrics across multiple confidence levels.
 */
export declare class GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics extends SpeakeasyBase {
    /**
     * The calculated area under the precision recall curve (AUPRC), computed by integrating over all confidence thresholds.
     */
    auprc?: number;
    /**
     * The AUPRC for metrics with fuzzy matching disabled, i.e., exact matching only.
     */
    auprcExact?: number;
    /**
     * Metrics across confidence levels with fuzzy matching enabled.
     */
    confidenceLevelMetrics?: GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics[];
    /**
     * Metrics across confidence levels with only exact matching.
     */
    confidenceLevelMetricsExact?: GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics[];
    /**
     * The Estimated Calibration Error (ECE) of the confidence of the predicted entities.
     */
    estimatedCalibrationError?: number;
    /**
     * The ECE for the predicted entities with fuzzy matching disabled, i.e., exact matching only.
     */
    estimatedCalibrationErrorExact?: number;
    /**
     * The metrics type for the label.
     */
    metricsType?: GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum;
}
