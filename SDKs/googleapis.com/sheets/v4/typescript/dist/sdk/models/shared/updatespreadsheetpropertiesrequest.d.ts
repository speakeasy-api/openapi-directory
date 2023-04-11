import { SpeakeasyBase } from "../../../internal/utils";
import { SpreadsheetProperties } from "./spreadsheetproperties";
/**
 * Updates properties of a spreadsheet.
 */
export declare class UpdateSpreadsheetPropertiesRequest extends SpeakeasyBase {
    /**
     * The fields that should be updated. At least one field must be specified. The root 'properties' is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string;
    /**
     * Properties of a spreadsheet.
     */
    properties?: SpreadsheetProperties;
}
