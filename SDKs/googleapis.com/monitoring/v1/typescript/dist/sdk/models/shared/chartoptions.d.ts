import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The chart mode.
 */
export declare enum ChartOptionsModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Color = "COLOR",
    XRay = "X_RAY",
    Stats = "STATS"
}
/**
 * Options to control visual rendering of a chart.
 */
export declare class ChartOptions extends SpeakeasyBase {
    /**
     * The chart mode.
     */
    mode?: ChartOptionsModeEnum;
}
