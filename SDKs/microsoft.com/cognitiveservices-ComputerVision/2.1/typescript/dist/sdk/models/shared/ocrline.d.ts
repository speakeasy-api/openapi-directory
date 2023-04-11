import { SpeakeasyBase } from "../../../internal/utils";
import { OcrWord } from "./ocrword";
/**
 * An object describing a single recognized line of text.
 */
export declare class OcrLine extends SpeakeasyBase {
    /**
     * Bounding box of a recognized line. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down.
     */
    boundingBox?: string;
    /**
     * An array of objects, where each object represents a recognized word.
     */
    words?: OcrWord[];
}
