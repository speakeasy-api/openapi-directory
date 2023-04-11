import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
/**
 * The request for retrieving a Spreadsheet.
 */
export declare class GetSpreadsheetByDataFilterRequest extends SpeakeasyBase {
    /**
     * The DataFilters used to select which ranges to retrieve from the spreadsheet.
     */
    dataFilters?: DataFilter[];
    /**
     * True if grid data should be returned. This parameter is ignored if a field mask was set in the request.
     */
    includeGridData?: boolean;
}
