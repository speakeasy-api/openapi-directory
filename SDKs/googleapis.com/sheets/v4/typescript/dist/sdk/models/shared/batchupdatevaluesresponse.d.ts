import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateValuesResponse } from "./updatevaluesresponse";
/**
 * The response when updating a range of values in a spreadsheet.
 */
export declare class BatchUpdateValuesResponse extends SpeakeasyBase {
    /**
     * One UpdateValuesResponse per requested range, in the same order as the requests appeared.
     */
    responses?: UpdateValuesResponse[];
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string;
    /**
     * The total number of cells updated.
     */
    totalUpdatedCells?: number;
    /**
     * The total number of columns where at least one cell in the column was updated.
     */
    totalUpdatedColumns?: number;
    /**
     * The total number of rows where at least one cell in the row was updated.
     */
    totalUpdatedRows?: number;
    /**
     * The total number of sheets where at least one cell in the sheet was updated.
     */
    totalUpdatedSheets?: number;
}
