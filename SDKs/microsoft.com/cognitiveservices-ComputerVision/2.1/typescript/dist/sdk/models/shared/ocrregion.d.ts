import { SpeakeasyBase } from "../../../internal/utils";
import { OcrLine } from "./ocrline";
/**
 * A region consists of multiple lines (e.g. a column of text in a multi-column document).
 */
export declare class OcrRegion extends SpeakeasyBase {
    /**
     * Bounding box of a recognized region. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down.
     */
    boundingBox?: string;
    /**
     * An array of recognized lines of text.
     */
    lines?: OcrLine[];
}
