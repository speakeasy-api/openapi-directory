import { SpeakeasyBase } from "../../../internal/utils";
import { PivotDimensionHeader } from "./pivotdimensionheader";
/**
 * Dimensions' values in a single pivot.
 */
export declare class PivotHeader extends SpeakeasyBase {
    /**
     * The size is the same as the cardinality of the corresponding dimension combinations.
     */
    pivotDimensionHeaders?: PivotDimensionHeader[];
    /**
     * The cardinality of the pivot. The total number of rows for this pivot's fields regardless of how the parameters `offset` and `limit` are specified in the request.
     */
    rowCount?: number;
}
