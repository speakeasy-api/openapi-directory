import { SpeakeasyBase } from "../../../internal/utils";
import { Request } from "./request";
/**
 * The request for updating any aspect of a spreadsheet.
 */
export declare class BatchUpdateSpreadsheetRequest extends SpeakeasyBase {
    /**
     * Determines if the update response should include the spreadsheet resource.
     */
    includeSpreadsheetInResponse?: boolean;
    /**
     * A list of updates to apply to the spreadsheet. Requests will be applied in the order they are specified. If any request is not valid, no requests will be applied.
     */
    requests?: Request[];
    /**
     * True if grid data should be returned. Meaningful only if include_spreadsheet_in_response is 'true'. This parameter is ignored if a field mask was set in the request.
     */
    responseIncludeGridData?: boolean;
    /**
     * Limits the ranges included in the response spreadsheet. Meaningful only if include_spreadsheet_in_response is 'true'.
     */
    responseRanges?: string[];
}
