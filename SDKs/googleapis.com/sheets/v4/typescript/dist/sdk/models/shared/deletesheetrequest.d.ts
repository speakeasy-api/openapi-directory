import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deletes the requested sheet.
 */
export declare class DeleteSheetRequest extends SpeakeasyBase {
    /**
     * The ID of the sheet to delete. If the sheet is of DATA_SOURCE type, the associated DataSource is also deleted.
     */
    sheetId?: number;
}
