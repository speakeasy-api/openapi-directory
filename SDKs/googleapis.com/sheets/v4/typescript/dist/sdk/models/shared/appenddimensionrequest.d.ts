import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether rows or columns should be appended.
 */
export declare enum AppendDimensionRequestDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}
/**
 * Appends rows or columns to the end of a sheet.
 */
export declare class AppendDimensionRequest extends SpeakeasyBase {
    /**
     * Whether rows or columns should be appended.
     */
    dimension?: AppendDimensionRequestDimensionEnum;
    /**
     * The number of rows or columns to append.
     */
    length?: number;
    /**
     * The sheet to append rows or columns to.
     */
    sheetId?: number;
}
