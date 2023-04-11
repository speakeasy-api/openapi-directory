import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The units for translate elements.
 */
export declare enum AffineTransformUnitEnum {
    UnitUnspecified = "UNIT_UNSPECIFIED",
    Emu = "EMU",
    Pt = "PT"
}
/**
 * AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ] to transform source coordinates (x,y) into destination coordinates (x', y') according to: x' x = shear_y scale_y translate_y 1 [ 1 ] After transformation, x' = scale_x * x + shear_x * y + translate_x; y' = scale_y * y + shear_y * x + translate_y; This message is therefore composed of these six matrix elements.
 */
export declare class AffineTransform extends SpeakeasyBase {
    /**
     * The X coordinate scaling element.
     */
    scaleX?: number;
    /**
     * The Y coordinate scaling element.
     */
    scaleY?: number;
    /**
     * The X coordinate shearing element.
     */
    shearX?: number;
    /**
     * The Y coordinate shearing element.
     */
    shearY?: number;
    /**
     * The X coordinate translation element.
     */
    translateX?: number;
    /**
     * The Y coordinate translation element.
     */
    translateY?: number;
    /**
     * The units for translate elements.
     */
    unit?: AffineTransformUnitEnum;
}
