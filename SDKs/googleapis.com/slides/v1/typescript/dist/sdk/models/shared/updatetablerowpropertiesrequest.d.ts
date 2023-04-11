import { SpeakeasyBase } from "../../../internal/utils";
import { TableRowProperties } from "./tablerowproperties";
/**
 * Updates the properties of a Table row.
 */
export declare class UpdateTableRowPropertiesRequest extends SpeakeasyBase {
    /**
     * The fields that should be updated. At least one field must be specified. The root `tableRowProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the minimum row height, set `fields` to `"min_row_height"`. If '"min_row_height"' is included in the field mask but the property is left unset, the minimum row height will default to 0.
     */
    fields?: string;
    /**
     * The object ID of the table.
     */
    objectId?: string;
    /**
     * The list of zero-based indices specifying which rows to update. If no indices are provided, all rows in the table will be updated.
     */
    rowIndices?: number[];
    /**
     * Properties of each row in a table.
     */
    tableRowProperties?: TableRowProperties;
}
