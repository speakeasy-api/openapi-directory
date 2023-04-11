import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
export declare class Row extends SpeakeasyBase {
    /**
     * The list of cells that constitute the row. Must have the same length as `columnHeaders` for two-dimensional tables, a length of 1 for one-dimensional tables. Required.
     */
    cells?: Value[];
}
