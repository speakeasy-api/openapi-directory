import { SpeakeasyBase } from "../../../internal/utils";
export declare class GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry extends SpeakeasyBase {
    /**
     * Threshold used for this entry. For classification tasks, this is a classification threshold: a predicted label is categorized as positive or negative (in the context of this point on the PR curve) based on whether the label's score meets this threshold. For image object detection (bounding box) tasks, this is the [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) threshold for the context of this point on the PR curve.
     */
    confidenceThreshold?: number;
    /**
     * Harmonic mean of recall and precision.
     */
    f1Score?: number;
    /**
     * The harmonic mean of recall_at1 and precision_at1.
     */
    f1ScoreAt1?: number;
    /**
     * The harmonic mean of recall_at5 and precision_at5.
     */
    f1ScoreAt5?: number;
    /**
     * Precision value.
     */
    precision?: number;
    /**
     * Precision value for entries with label that has highest score.
     */
    precisionAt1?: number;
    /**
     * Precision value for entries with label that has highest 5 scores.
     */
    precisionAt5?: number;
    /**
     * Recall value.
     */
    recall?: number;
    /**
     * Recall value for entries with label that has highest score.
     */
    recallAt1?: number;
    /**
     * Recall value for entries with label that has highest 5 scores.
     */
    recallAt5?: number;
}
