import { SpeakeasyBase } from "../../../internal/utils";
import { GridCoordinate } from "./gridcoordinate";
/**
 * How the data should be pasted.
 */
export declare enum PasteDataRequestTypeEnum {
    PasteNormal = "PASTE_NORMAL",
    PasteValues = "PASTE_VALUES",
    PasteFormat = "PASTE_FORMAT",
    PasteNoBorders = "PASTE_NO_BORDERS",
    PasteFormula = "PASTE_FORMULA",
    PasteDataValidation = "PASTE_DATA_VALIDATION",
    PasteConditionalFormatting = "PASTE_CONDITIONAL_FORMATTING"
}
/**
 * Inserts data into the spreadsheet starting at the specified coordinate.
 */
export declare class PasteDataRequest extends SpeakeasyBase {
    /**
     * A coordinate in a sheet. All indexes are zero-based.
     */
    coordinate?: GridCoordinate;
    /**
     * The data to insert.
     */
    data?: string;
    /**
     * The delimiter in the data.
     */
    delimiter?: string;
    /**
     * True if the data is HTML.
     */
    html?: boolean;
    /**
     * How the data should be pasted.
     */
    type?: PasteDataRequestTypeEnum;
}
