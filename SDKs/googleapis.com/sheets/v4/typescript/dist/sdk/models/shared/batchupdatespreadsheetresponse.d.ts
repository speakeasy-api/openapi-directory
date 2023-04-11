import { SpeakeasyBase } from "../../../internal/utils";
import { Response } from "./response";
import { Spreadsheet } from "./spreadsheet";
/**
 * The reply for batch updating a spreadsheet.
 */
export declare class BatchUpdateSpreadsheetResponse extends SpeakeasyBase {
    /**
     * The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.
     */
    replies?: Response[];
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string;
    /**
     * Resource that represents a spreadsheet.
     */
    updatedSpreadsheet?: Spreadsheet;
}
