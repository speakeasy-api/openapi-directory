import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateValuesByDataFilterResponse } from "./updatevaluesbydatafilterresponse";
/**
 * The response when updating a range of values in a spreadsheet.
 */
export declare class BatchUpdateValuesByDataFilterResponse extends SpeakeasyBase {
    /**
     * The response for each range updated.
     */
    responses?: UpdateValuesByDataFilterResponse[];
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
