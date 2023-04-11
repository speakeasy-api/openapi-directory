import { SpeakeasyBase } from "../../../internal/utils";
import { Word } from "./word";
/**
 * An object representing a recognized text line.
 */
export declare class Line extends SpeakeasyBase {
    /**
     * Quadrangle bounding box, with coordinates in original image. The eight numbers represent the four points (x-coordinate, y-coordinate from the left-top corner of the image) of the detected rectangle from the left-top corner in the clockwise direction. For images, coordinates are in pixels. For PDF, coordinates are in inches.
     */
    boundingBox?: number[];
    /**
     * The text content of the line.
     */
    text?: string;
    /**
     * List of words in the text line.
     */
    words?: Word[];
}
