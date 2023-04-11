import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1ColorInfo } from "./googlecloudvisionv1p2beta1colorinfo";
/**
 * Set of dominant colors and their corresponding scores.
 */
export declare class GoogleCloudVisionV1p2beta1DominantColorsAnnotation extends SpeakeasyBase {
    /**
     * RGB color values with their score and pixel fraction.
     */
    colors?: GoogleCloudVisionV1p2beta1ColorInfo[];
}
