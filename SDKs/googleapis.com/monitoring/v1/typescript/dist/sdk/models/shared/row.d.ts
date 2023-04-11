import { SpeakeasyBase } from "../../../internal/utils";
import { Widget } from "./widget";
/**
 * Defines the layout properties and content for a row.
 */
export declare class Row extends SpeakeasyBase {
    /**
     * The relative weight of this row. The row weight is used to adjust the height of rows on the screen (relative to peers). Greater the weight, greater the height of the row on the screen. If omitted, a value of 1 is used while rendering.
     */
    weight?: string;
    /**
     * The display widgets arranged horizontally in this row.
     */
    widgets?: Widget[];
}
