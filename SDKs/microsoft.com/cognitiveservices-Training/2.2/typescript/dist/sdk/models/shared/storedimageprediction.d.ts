import { SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";
/**
 * result of an image classification request.
 */
export declare class StoredImagePrediction extends SpeakeasyBase {
    created?: Date;
    /**
     * Domain used for the prediction.
     */
    domain?: string;
    id?: string;
    iteration?: string;
    /**
     * The URI to the original prediction image.
     */
    originalImageUri?: string;
    predictions?: Prediction[];
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
