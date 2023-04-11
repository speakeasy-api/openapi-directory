import { SpeakeasyBase } from "../../../internal/utils";
import { BooleanRule } from "./booleanrule";
import { GradientRule } from "./gradientrule";
import { GridRange } from "./gridrange";
/**
 * A rule describing a conditional format.
 */
export declare class ConditionalFormatRule extends SpeakeasyBase {
    /**
     * A rule that may or may not match, depending on the condition.
     */
    booleanRule?: BooleanRule;
    /**
     * A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points.
     */
    gradientRule?: GradientRule;
    /**
     * The ranges that are formatted if the condition is true. All the ranges must be on the same grid.
     */
    ranges?: GridRange[];
}
