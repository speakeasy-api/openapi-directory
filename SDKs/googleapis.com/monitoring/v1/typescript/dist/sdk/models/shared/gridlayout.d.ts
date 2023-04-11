import { SpeakeasyBase } from "../../../internal/utils";
import { Widget } from "./widget";
/**
 * A basic layout divides the available space into vertical columns of equal width and arranges a list of widgets using a row-first strategy.
 */
export declare class GridLayout extends SpeakeasyBase {
    /**
     * The number of columns into which the view's width is divided. If omitted or set to zero, a system default will be used while rendering.
     */
    columns?: string;
    /**
     * The informational elements that are arranged into the columns row-first.
     */
    widgets?: Widget[];
}
