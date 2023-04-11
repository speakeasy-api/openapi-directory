import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
import { ValueRange } from "./valuerange";
/**
 * The response when updating a range of values by a data filter in a spreadsheet.
 */
export declare class UpdateValuesByDataFilterResponse extends SpeakeasyBase {
    /**
     * Filter that describes what data should be selected or returned from a request.
     */
    dataFilter?: DataFilter;
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
     * The range (in [A1 notation](/sheets/api/guides/concepts#cell)) that updates were applied to.
     */
    updatedRange?: string;
    /**
     * The number of rows where at least one cell in the row was updated.
     */
    updatedRows?: number;
}
