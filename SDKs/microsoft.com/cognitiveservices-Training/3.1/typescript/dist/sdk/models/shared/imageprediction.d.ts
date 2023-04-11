import { SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";
/**
 * Result of an image prediction request.
 */
export declare class ImagePrediction extends SpeakeasyBase {
    /**
     * Date this prediction was created.
     */
    created?: Date;
    /**
     * Prediction Id.
     */
    id?: string;
    /**
     * Iteration Id.
     */
    iteration?: string;
    /**
     * List of predictions.
     */
    predictions?: Prediction[];
    /**
     * Project Id.
     */
    project?: string;
}
