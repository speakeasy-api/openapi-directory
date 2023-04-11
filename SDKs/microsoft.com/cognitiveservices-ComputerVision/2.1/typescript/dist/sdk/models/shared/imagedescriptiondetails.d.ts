import { SpeakeasyBase } from "../../../internal/utils";
import { ImageCaption } from "./imagecaption";
/**
 * A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.
 */
export declare class ImageDescriptionDetails extends SpeakeasyBase {
    /**
     * A list of captions, sorted by confidence level.
     */
    captions?: ImageCaption[];
    /**
     * A collection of image tags.
     */
    tags?: string[];
}
