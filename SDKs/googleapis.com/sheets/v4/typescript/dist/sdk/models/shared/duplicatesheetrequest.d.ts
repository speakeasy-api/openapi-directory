import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Duplicates the contents of a sheet.
 */
export declare class DuplicateSheetRequest extends SpeakeasyBase {
    /**
     * The zero-based index where the new sheet should be inserted. The index of all sheets after this are incremented.
     */
    insertSheetIndex?: number;
    /**
     * If set, the ID of the new sheet. If not set, an ID is chosen. If set, the ID must not conflict with any existing sheet ID. If set, it must be non-negative.
     */
    newSheetId?: number;
    /**
     * The name of the new sheet. If empty, a new name is chosen for you.
     */
    newSheetName?: string;
    /**
     * The sheet to duplicate. If the source sheet is of DATA_SOURCE type, its backing DataSource is also duplicated and associated with the new copy of the sheet. No data execution is triggered, the grid data of this sheet is also copied over but only available after the batch request completes.
     */
    sourceSheetId?: number;
}
