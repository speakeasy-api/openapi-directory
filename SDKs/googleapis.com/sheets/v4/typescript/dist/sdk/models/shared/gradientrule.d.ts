import { SpeakeasyBase } from "../../../internal/utils";
import { InterpolationPoint } from "./interpolationpoint";
/**
 * A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points.
 */
export declare class GradientRule extends SpeakeasyBase {
    /**
     * A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen.
     */
    maxpoint?: InterpolationPoint;
    /**
     * A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen.
     */
    midpoint?: InterpolationPoint;
    /**
     * A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen.
     */
    minpoint?: InterpolationPoint;
}
