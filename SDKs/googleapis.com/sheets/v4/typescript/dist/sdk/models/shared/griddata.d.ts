import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionProperties } from "./dimensionproperties";
import { RowData } from "./rowdata";
/**
 * Data in the grid, as well as metadata about the dimensions.
 */
export declare class GridData extends SpeakeasyBase {
    /**
     * Metadata about the requested columns in the grid, starting with the column in start_column.
     */
    columnMetadata?: DimensionProperties[];
    /**
     * The data in the grid, one entry per row, starting with the row in startRow. The values in RowData will correspond to columns starting at start_column.
     */
    rowData?: RowData[];
    /**
     * Metadata about the requested rows in the grid, starting with the row in start_row.
     */
    rowMetadata?: DimensionProperties[];
    /**
     * The first column this GridData refers to, zero-based.
     */
    startColumn?: number;
    /**
     * The first row this GridData refers to, zero-based.
     */
    startRow?: number;
}
