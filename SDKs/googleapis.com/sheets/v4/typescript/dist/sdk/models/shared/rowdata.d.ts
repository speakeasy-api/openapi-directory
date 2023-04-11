import { SpeakeasyBase } from "../../../internal/utils";
import { CellData } from "./celldata";
/**
 * Data about each cell in a row.
 */
export declare class RowData extends SpeakeasyBase {
    /**
     * The values in the row, one per column.
     */
    values?: CellData[];
}
