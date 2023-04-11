import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metrics for a single confidence threshold.
 */
export declare class BoundingBoxMetricsEntryConfidenceMetricsEntry extends SpeakeasyBase {
    /**
     * Output only. The confidence threshold value used to compute the metrics.
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
