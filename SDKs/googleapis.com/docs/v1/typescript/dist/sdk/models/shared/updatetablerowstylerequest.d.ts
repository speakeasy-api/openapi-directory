import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
import { TableRowStyle } from "./tablerowstyle";
/**
 * Updates the TableRowStyle of rows in a table.
 */
export declare class UpdateTableRowStyleRequest extends SpeakeasyBase {
    /**
     * The fields that should be updated. At least one field must be specified. The root `tableRowStyle` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the minimum row height, set `fields` to `"min_row_height"`.
     */
    fields?: string;
    /**
     * The list of zero-based row indices whose style should be updated. If no indices are specified, all rows will be updated.
     */
    rowIndices?: number[];
    /**
     * Styles that apply to a table row.
     */
    tableRowStyle?: TableRowStyle;
    /**
     * A particular location in the document.
     */
    tableStartLocation?: Location;
}
