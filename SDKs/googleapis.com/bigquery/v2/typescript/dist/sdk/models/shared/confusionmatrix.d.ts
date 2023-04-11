import { SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";
/**
 * Confusion matrix for multi-class classification models.
 */
export declare class ConfusionMatrix extends SpeakeasyBase {
    /**
     * Confidence threshold used when computing the entries of the confusion matrix.
     */
    confidenceThreshold?: number;
    /**
     * One row per actual label.
     */
    rows?: Row[];
}
