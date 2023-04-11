import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Qualitative confidence measure.
 */
export declare enum WordConfidenceEnum {
    High = "High",
    Low = "Low"
}
/**
 * An object representing a recognized word.
 */
export declare class Word extends SpeakeasyBase {
    /**
     * Quadrangle bounding box, with coordinates in original image. The eight numbers represent the four points (x-coordinate, y-coordinate from the left-top corner of the image) of the detected rectangle from the left-top corner in the clockwise direction. For images, coordinates are in pixels. For PDF, coordinates are in inches.
     */
    boundingBox: number[];
    /**
     * Qualitative confidence measure.
     */
    confidence?: WordConfidenceEnum;
    /**
     * The text content of the word.
     */
    text: string;
}
