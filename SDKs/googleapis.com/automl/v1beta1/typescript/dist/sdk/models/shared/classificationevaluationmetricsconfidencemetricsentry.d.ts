import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metrics for a single confidence threshold.
 */
export declare class ClassificationEvaluationMetricsConfidenceMetricsEntry extends SpeakeasyBase {
    /**
     * Output only. Metrics are computed with an assumption that the model never returns predictions with score lower than this value.
     */
    confidenceThreshold?: number;
    /**
     * Output only. The harmonic mean of recall and precision.
     */
    f1Score?: number;
    /**
     * Output only. The harmonic mean of recall_at1 and precision_at1.
     */
    f1ScoreAt1?: number;
    /**
     * Output only. The number of ground truth labels that are not matched by a model created label.
     */
    falseNegativeCount?: string;
    /**
     * Output only. The number of model created labels that do not match a ground truth label.
     */
    falsePositiveCount?: string;
    /**
     * Output only. False Positive Rate for the given confidence threshold.
     */
    falsePositiveRate?: number;
    /**
     * Output only. The False Positive Rate when only considering the label that has the highest prediction score and not below the confidence threshold for each example.
     */
    falsePositiveRateAt1?: number;
    /**
     * Output only. Metrics are computed with an assumption that the model always returns at most this many predictions (ordered by their score, descendingly), but they all still need to meet the confidence_threshold.
     */
    positionThreshold?: number;
    /**
     * Output only. Precision for the given confidence threshold.
     */
    precision?: number;
    /**
     * Output only. The precision when only considering the label that has the highest prediction score and not below the confidence threshold for each example.
     */
    precisionAt1?: number;
    /**
     * Output only. Recall (True Positive Rate) for the given confidence threshold.
     */
    recall?: number;
    /**
     * Output only. The Recall (True Positive Rate) when only considering the label that has the highest prediction score and not below the confidence threshold for each example.
     */
    recallAt1?: number;
    /**
     * Output only. The number of labels that were not created by the model, but if they would, they would not match a ground truth label.
     */
    trueNegativeCount?: string;
    /**
     * Output only. The number of model created labels that match a ground truth label.
     */
    truePositiveCount?: string;
}
