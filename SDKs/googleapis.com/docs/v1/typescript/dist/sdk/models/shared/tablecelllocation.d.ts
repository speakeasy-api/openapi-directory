import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Location of a single cell within a table.
 */
export declare class TableCellLocation extends SpeakeasyBase {
    /**
     * The zero-based column index. For example, the second column in the table has a column index of 1.
     */
    columnIndex?: number;
    /**
     * The zero-based row index. For example, the second row in the table has a row index of 1.
     */
    rowIndex?: number;
    /**
     * A particular location in the document.
     */
    tableStartLocation?: Location;
}
