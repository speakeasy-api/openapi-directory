import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result of the find/replace.
 */
export declare class FindReplaceResponse extends SpeakeasyBase {
    /**
     * The number of formula cells changed.
     */
    formulasChanged?: number;
    /**
     * The number of occurrences (possibly multiple within a cell) changed. For example, if replacing `"e"` with `"o"` in `"Google Sheets"`, this would be `"3"` because `"Google Sheets"` -> `"Googlo Shoots"`.
     */
    occurrencesChanged?: number;
    /**
     * The number of rows changed.
     */
    rowsChanged?: number;
    /**
     * The number of sheets changed.
     */
    sheetsChanged?: number;
    /**
     * The number of non-formula cells changed.
     */
    valuesChanged?: number;
}
