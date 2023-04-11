import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single entry in the confusion matrix.
 */
export declare class Entry extends SpeakeasyBase {
    /**
     * Number of items being predicted as this label.
     */
    itemCount?: string;
    /**
     * The predicted label. For confidence_threshold > 0, we will also add an entry indicating the number of items under the confidence threshold.
     */
    predictedLabel?: string;
}
