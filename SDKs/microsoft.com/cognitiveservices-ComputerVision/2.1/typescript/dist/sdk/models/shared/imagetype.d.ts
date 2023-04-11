import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object providing possible image types and matching confidence levels.
 */
export declare class ImageType extends SpeakeasyBase {
    /**
     * Confidence level that the image is a clip art.
     */
    clipArtType?: number;
    /**
     * Confidence level that the image is a line drawing.
     */
    lineDrawingType?: number;
}
