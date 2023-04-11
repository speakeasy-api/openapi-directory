import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information on a recognized word.
 */
export declare class OcrWord extends SpeakeasyBase {
    /**
     * Bounding box of a recognized word. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down.
     */
    boundingBox?: string;
    /**
     * String value of a recognized word.
     */
    text?: string;
}
