import { SpeakeasyBase } from "../../../internal/utils";
import { ValueRange } from "./valuerange";
/**
 * The response when updating a range of values in a spreadsheet.
 */
export declare class UpdateValuesResponse extends SpeakeasyBase {
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string;
    /**
     * The number of cells updated.
     */
    updatedCells?: number;
    /**
     * The number of columns where at least one cell in the column was updated.
     */
    updatedColumns?: number;
    /**
     * Data within a range of the spreadsheet.
     */
    updatedData?: ValueRange;
    /**
     * The range (in A1 notation) that updates were applied to.
     */
    updatedRange?: string;
    /**
     * The number of rows where at least one cell in the row was updated.
     */
    updatedRows?: number;
}
