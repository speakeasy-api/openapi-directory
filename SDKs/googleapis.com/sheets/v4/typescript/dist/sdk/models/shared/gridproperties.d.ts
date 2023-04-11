import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Properties of a grid.
 */
export declare class GridProperties extends SpeakeasyBase {
    /**
     * The number of columns in the grid.
     */
    columnCount?: number;
    /**
     * True if the column grouping control toggle is shown after the group.
     */
    columnGroupControlAfter?: boolean;
    /**
     * The number of columns that are frozen in the grid.
     */
    frozenColumnCount?: number;
    /**
     * The number of rows that are frozen in the grid.
     */
    frozenRowCount?: number;
    /**
     * True if the grid isn't showing gridlines in the UI.
     */
    hideGridlines?: boolean;
    /**
     * The number of rows in the grid.
     */
    rowCount?: number;
    /**
     * True if the row grouping control toggle is shown after the group.
     */
    rowGroupControlAfter?: boolean;
}
