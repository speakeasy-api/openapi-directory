import { SpeakeasyBase } from "../../../internal/utils";
import { TableColumnProperties } from "./tablecolumnproperties";
/**
 * Updates the properties of a Table column.
 */
export declare class UpdateTableColumnPropertiesRequest extends SpeakeasyBase {
    /**
     * The list of zero-based indices specifying which columns to update. If no indices are provided, all columns in the table will be updated.
     */
    columnIndices?: number[];
    /**
     * The fields that should be updated. At least one field must be specified. The root `tableColumnProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the column width, set `fields` to `"column_width"`. If '"column_width"' is included in the field mask but the property is left unset, the column width will default to 406,400 EMU (32 points).
     */
    fields?: string;
    /**
     * The object ID of the table.
     */
    objectId?: string;
    /**
     * Properties of each column in a table.
     */
    tableColumnProperties?: TableColumnProperties;
}
