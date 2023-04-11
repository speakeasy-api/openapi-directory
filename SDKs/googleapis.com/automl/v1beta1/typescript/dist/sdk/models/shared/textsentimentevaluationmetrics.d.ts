import { SpeakeasyBase } from "../../../internal/utils";
import { ConfusionMatrix } from "./confusionmatrix";
/**
 * Model evaluation metrics for text sentiment problems.
 */
export declare class TextSentimentEvaluationMetrics extends SpeakeasyBase {
    /**
     * Output only. The annotation spec ids used for this evaluation. Deprecated .
     */
    annotationSpecId?: string[];
    /**
     * Confusion matrix of the model running the classification.
     */
    confusionMatrix?: ConfusionMatrix;
    /**
     * Output only. The harmonic mean of recall and precision.
     */
    f1Score?: number;
    /**
     * Output only. Linear weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec.
     */
    linearKappa?: number;
    /**
     * Output only. Mean absolute error. Only set for the overall model evaluation, not for evaluation of a single annotation spec.
     */
    meanAbsoluteError?: number;
    /**
     * Output only. Mean squared error. Only set for the overall model evaluation, not for evaluation of a single annotation spec.
     */
    meanSquaredError?: number;
    /**
     * Output only. Precision.
     */
    precision?: number;
    /**
     * Output only. Quadratic weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec.
     */
    quadraticKappa?: number;
    /**
     * Output only. Recall.
     */
    recall?: number;
}
