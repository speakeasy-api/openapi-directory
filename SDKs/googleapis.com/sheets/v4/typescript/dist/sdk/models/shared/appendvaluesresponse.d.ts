import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateValuesResponse } from "./updatevaluesresponse";
/**
 * The response when updating a range of values in a spreadsheet.
 */
export declare class AppendValuesResponse extends SpeakeasyBase {
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string;
    /**
     * The range (in A1 notation) of the table that values are being appended to (before the values were appended). Empty if no table was found.
     */
    tableRange?: string;
    /**
     * The response when updating a range of values in a spreadsheet.
     */
    updates?: UpdateValuesResponse;
}
