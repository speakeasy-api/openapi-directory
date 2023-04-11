import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The view window's mode.
 */
export declare enum ChartAxisViewWindowOptionsViewWindowModeEnum {
    DefaultViewWindowMode = "DEFAULT_VIEW_WINDOW_MODE",
    ViewWindowModeUnsupported = "VIEW_WINDOW_MODE_UNSUPPORTED",
    Explicit = "EXPLICIT",
    Pretty = "PRETTY"
}
/**
 * The options that define a "view window" for a chart (such as the visible values in an axis).
 */
export declare class ChartAxisViewWindowOptions extends SpeakeasyBase {
    /**
     * The maximum numeric value to be shown in this view window. If unset, will automatically determine a maximum value that looks good for the data.
     */
    viewWindowMax?: number;
    /**
     * The minimum numeric value to be shown in this view window. If unset, will automatically determine a minimum value that looks good for the data.
     */
    viewWindowMin?: number;
    /**
     * The view window's mode.
     */
    viewWindowMode?: ChartAxisViewWindowOptionsViewWindowModeEnum;
}
