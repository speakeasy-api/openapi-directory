import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A coordinate in a sheet. All indexes are zero-based.
 */
export declare class GridCoordinate extends SpeakeasyBase {
    /**
     * The column index of the coordinate.
     */
    columnIndex?: number;
    /**
     * The row index of the coordinate.
     */
    rowIndex?: number;
    /**
     * The sheet this coordinate is on.
     */
    sheetId?: number;
}
