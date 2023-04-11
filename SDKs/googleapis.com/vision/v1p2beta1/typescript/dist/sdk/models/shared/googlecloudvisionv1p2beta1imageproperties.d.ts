import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1DominantColorsAnnotation } from "./googlecloudvisionv1p2beta1dominantcolorsannotation";
/**
 * Stores image properties, such as dominant colors.
 */
export declare class GoogleCloudVisionV1p2beta1ImageProperties extends SpeakeasyBase {
    /**
     * Set of dominant colors and their corresponding scores.
     */
    dominantColors?: GoogleCloudVisionV1p2beta1DominantColorsAnnotation;
}
