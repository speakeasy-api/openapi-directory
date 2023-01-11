import { SpeakeasyBase } from "../../../internal/utils";
import { Line } from "./line";
export declare enum TextRecognitionResultUnitEnum {
    Pixel = "pixel",
    Inch = "inch"
}
/**
 * An object representing a recognized text region
**/
export declare class TextRecognitionResult extends SpeakeasyBase {
    clockwiseOrientation?: number;
    height?: number;
    lines: Line[];
    page?: number;
    unit?: TextRecognitionResultUnitEnum;
    width?: number;
}
