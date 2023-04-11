import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The axis scale. By default, a linear scale is used.
 */
export declare enum AxisScaleEnum {
    ScaleUnspecified = "SCALE_UNSPECIFIED",
    Linear = "LINEAR",
    Log10 = "LOG10"
}
/**
 * A chart axis.
 */
export declare class Axis extends SpeakeasyBase {
    /**
     * The label of the axis.
     */
    label?: string;
    /**
     * The axis scale. By default, a linear scale is used.
     */
    scale?: AxisScaleEnum;
}
