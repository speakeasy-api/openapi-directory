import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metrics for a single confidence threshold.
 */
export declare class TextExtractionEvaluationMetricsConfidenceMetricsEntry extends SpeakeasyBase {
    /**
     * Output only. The confidence threshold value used to compute the metrics. Only annotations with score of at least this threshold are considered to be ones the model would return.
     */
    confidenceThreshold?: number;
    /**
     * Output only. The harmonic mean of recall and precision.
     */
    f1Score?: number;
    /**
     * Output only. Precision under the given confidence threshold.
     */
    precision?: number;
    /**
     * Output only. Recall under the given confidence threshold.
     */
    recall?: number;
}
