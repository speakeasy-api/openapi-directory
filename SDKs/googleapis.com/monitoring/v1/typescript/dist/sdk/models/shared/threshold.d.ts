import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state color for this threshold. Color is not allowed in a XyChart.
 */
export declare enum ThresholdColorEnum {
    ColorUnspecified = "COLOR_UNSPECIFIED",
    Yellow = "YELLOW",
    Red = "RED"
}
/**
 * The direction for the current threshold. Direction is not allowed in a XyChart.
 */
export declare enum ThresholdDirectionEnum {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED",
    Above = "ABOVE",
    Below = "BELOW"
}
/**
 * The target axis to use for plotting the threshold. Target axis is not allowed in a Scorecard.
 */
export declare enum ThresholdTargetAxisEnum {
    TargetAxisUnspecified = "TARGET_AXIS_UNSPECIFIED",
    Y1 = "Y1",
    Y2 = "Y2"
}
/**
 * Defines a threshold for categorizing time series values.
 */
export declare class Threshold extends SpeakeasyBase {
    /**
     * The state color for this threshold. Color is not allowed in a XyChart.
     */
    color?: ThresholdColorEnum;
    /**
     * The direction for the current threshold. Direction is not allowed in a XyChart.
     */
    direction?: ThresholdDirectionEnum;
    /**
     * A label for the threshold.
     */
    label?: string;
    /**
     * The target axis to use for plotting the threshold. Target axis is not allowed in a Scorecard.
     */
    targetAxis?: ThresholdTargetAxisEnum;
    /**
     * The value of the threshold. The value should be defined in the native scale of the metric.
     */
    value?: number;
}
