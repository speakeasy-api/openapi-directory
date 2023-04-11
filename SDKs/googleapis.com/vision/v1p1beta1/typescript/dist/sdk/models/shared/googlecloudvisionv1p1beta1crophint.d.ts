import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";
/**
 * Single crop hint that is used to generate a new crop when serving an image.
 */
export declare class GoogleCloudVisionV1p1beta1CropHint extends SpeakeasyBase {
    /**
     * A bounding polygon for the detected image annotation.
     */
    boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * Confidence of this being a salient region. Range [0, 1].
     */
    confidence?: number;
    /**
     * Fraction of importance of this salient region with respect to the original image.
     */
    importanceFraction?: number;
}
