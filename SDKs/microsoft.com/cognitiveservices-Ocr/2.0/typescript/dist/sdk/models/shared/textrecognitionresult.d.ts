import { SpeakeasyBase } from "../../../internal/utils";
import { Line } from "./line";
/**
 * The unit used in the Width, Height and BoundingBox. For images, the unit is 'pixel'. For PDF, the unit is 'inch'.
 */
export declare enum TextRecognitionResultUnitEnum {
    Pixel = "pixel",
    Inch = "inch"
}
/**
 * An object representing a recognized text region
 */
export declare class TextRecognitionResult extends SpeakeasyBase {
    /**
     * The orientation of the image in degrees in the clockwise direction. Range between [0, 360).
     */
    clockwiseOrientation?: number;
    /**
     * The height of the image in pixels or the PDF in inches.
     */
    height?: number;
    /**
     * A list of recognized text lines.
     */
    lines: Line[];
    /**
     * The 1-based page number of the recognition result.
     */
    page?: number;
    /**
     * The unit used in the Width, Height and BoundingBox. For images, the unit is 'pixel'. For PDF, the unit is 'inch'.
     */
    unit?: TextRecognitionResultUnitEnum;
    /**
     * The width of the image in pixels or the PDF in inches.
     */
    width?: number;
}
