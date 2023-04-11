import { SpeakeasyBase } from "../../../internal/utils";
import { RowData } from "./rowdata";
/**
 * Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary.
 */
export declare class AppendCellsRequest extends SpeakeasyBase {
    /**
     * The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; 'row.values.' should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string;
    /**
     * The data to append.
     */
    rows?: RowData[];
    /**
     * The sheet ID to append the data to.
     */
    sheetId?: number;
}
