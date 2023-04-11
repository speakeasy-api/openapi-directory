import { SpeakeasyBase } from "../../../internal/utils";
import { PivotHeaderEntry } from "./pivotheaderentry";
/**
 * The headers for each of the pivot sections defined in the request.
 */
export declare class PivotHeader extends SpeakeasyBase {
    /**
     * A single pivot section header.
     */
    pivotHeaderEntries?: PivotHeaderEntry[];
    /**
     * The total number of groups for this pivot.
     */
    totalPivotGroupsCount?: number;
}
