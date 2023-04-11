import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Confusion matrix for binary classification models.
 */
export declare class BinaryConfusionMatrix extends SpeakeasyBase {
    /**
     * The fraction of predictions given the correct label.
     */
    accuracy?: number;
    /**
     * The equally weighted average of recall and precision.
     */
    f1Score?: number;
    /**
     * Number of false samples predicted as false.
     */
    falseNegatives?: string;
    /**
     * Number of false samples predicted as true.
     */
    falsePositives?: string;
    /**
     * Threshold value used when computing each of the following metric.
     */
    positiveClassThreshold?: number;
    /**
     * The fraction of actual positive predictions that had positive actual labels.
     */
    precision?: number;
    /**
     * The fraction of actual positive labels that were given a positive prediction.
     */
    recall?: number;
    /**
     * Number of true samples predicted as false.
     */
    trueNegatives?: string;
    /**
     * Number of true samples predicted as true.
     */
    truePositives?: string;
}
