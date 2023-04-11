import { SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";
/**
 * Result of a suggested tags and regions request of the untagged image.
 */
export declare class StoredSuggestedTagAndRegion extends SpeakeasyBase {
    /**
     * Date this prediction was created.
     */
    created?: Date;
    /**
     * Domain used for the prediction.
     */
    domain?: string;
    /**
     * Height of the resized image.
     */
    height?: number;
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
     * Uncertainty (entropy) of suggested tags or regions per image.
     */
    predictionUncertainty?: number;
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
    /**
     * Width of the resized image.
     */
    width?: number;
}
