import { SpeakeasyBase } from "../../../internal/utils";
import { Widget } from "./widget";
/**
 * Defines the layout properties and content for a column.
 */
export declare class Column extends SpeakeasyBase {
    /**
     * The relative weight of this column. The column weight is used to adjust the width of columns on the screen (relative to peers). Greater the weight, greater the width of the column on the screen. If omitted, a value of 1 is used while rendering.
     */
    weight?: string;
    /**
     * The display widgets arranged vertically in this column.
     */
    widgets?: Widget[];
}
