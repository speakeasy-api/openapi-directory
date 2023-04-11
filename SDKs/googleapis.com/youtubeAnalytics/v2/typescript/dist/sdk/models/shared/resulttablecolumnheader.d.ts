import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The description of a column of the result table.
 */
export declare class ResultTableColumnHeader extends SpeakeasyBase {
    /**
     * The type of the column (`DIMENSION` or `METRIC`).
     */
    columnType?: string;
    /**
     * The type of the data in the column (`STRING`, `INTEGER`, `FLOAT`, etc.).
     */
    dataType?: string;
    /**
     * The name of the dimension or metric.
     */
    name?: string;
}
