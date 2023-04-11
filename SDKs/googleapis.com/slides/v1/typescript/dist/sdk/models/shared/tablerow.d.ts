import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { TableCell } from "./tablecell";
import { TableRowProperties } from "./tablerowproperties";
/**
 * Properties and contents of each row in a table.
 */
export declare class TableRow extends SpeakeasyBase {
    /**
     * A magnitude in a single direction in the specified units.
     */
    rowHeight?: Dimension;
    /**
     * Properties and contents of each cell. Cells that span multiple columns are represented only once with a column_span greater than 1. As a result, the length of this collection does not always match the number of columns of the entire table.
     */
    tableCells?: TableCell[];
    /**
     * Properties of each row in a table.
     */
    tableRowProperties?: TableRowProperties;
}
