import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
import { TableColumnProperties } from "./tablecolumnproperties";
/**
 * Updates the TableColumnProperties of columns in a table.
 */
export declare class UpdateTableColumnPropertiesRequest extends SpeakeasyBase {
    /**
     * The list of zero-based column indices whose property should be updated. If no indices are specified, all columns will be updated.
     */
    columnIndices?: number[];
    /**
     * The fields that should be updated. At least one field must be specified. The root `tableColumnProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the column width, set `fields` to `"width"`.
     */
    fields?: string;
    /**
     * The properties of a column in a table.
     */
    tableColumnProperties?: TableColumnProperties;
    /**
     * A particular location in the document.
     */
    tableStartLocation?: Location;
}
