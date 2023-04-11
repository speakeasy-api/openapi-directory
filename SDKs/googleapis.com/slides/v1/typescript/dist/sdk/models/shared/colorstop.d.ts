import { SpeakeasyBase } from "../../../internal/utils";
import { OpaqueColor } from "./opaquecolor";
/**
 * A color and position in a gradient band.
 */
export declare class ColorStop extends SpeakeasyBase {
    /**
     * The alpha value of this color in the gradient band. Defaults to 1.0, fully opaque.
     */
    alpha?: number;
    /**
     * A themeable solid color value.
     */
    color?: OpaqueColor;
    /**
     * The relative position of the color stop in the gradient band measured in percentage. The value should be in the interval [0.0, 1.0].
     */
    position?: number;
}
