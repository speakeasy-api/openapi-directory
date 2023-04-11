import { SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";
/**
 * result of an image classification request.
 */
export declare class StoredImagePrediction extends SpeakeasyBase {
    /**
     * Date this prediction was created.
     */
    created?: Date;
    /**
     * Domain used for the prediction.
     */
    domain?: string;
    /**
     * Prediction Id.
     */
    id?: string;
    /**
     * Iteration Id.
     */
    iteration?: string;
    /**
     * The URI to the original prediction image.
     */
    originalImageUri?: string;
    /**
     * List of predictions.
     */
    predictions?: Prediction[];
    /**
     * Project Id.
     */
    project?: string;
    /**
     * The URI to the (resized) prediction image.
     */
    resizedImageUri?: string;
    /**
     * The URI to the thumbnail of the original prediction image.
     */
    thumbnailUri?: string;
}
