import { SpeakeasyBase } from "../../../internal/utils";
import { OpaqueColor } from "./opaquecolor";
/**
 * A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists.
 */
export declare class SolidFill extends SpeakeasyBase {
    /**
     * The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
     */
    alpha?: number;
    /**
     * A themeable solid color value.
     */
    color?: OpaqueColor;
}
