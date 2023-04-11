import { SpeakeasyBase } from "../../../internal/utils";
import { SheetProperties } from "./sheetproperties";
/**
 * Updates properties of the sheet with the specified sheetId.
 */
export declare class UpdateSheetPropertiesRequest extends SpeakeasyBase {
    /**
     * The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string;
    /**
     * Properties of a sheet.
     */
    properties?: SheetProperties;
}
