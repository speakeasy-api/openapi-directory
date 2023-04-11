import { SpeakeasyBase } from "../../../internal/utils";
import { BranchModel } from "./branchmodel";
/**
 * Holds results from a paged query returning BranchModel values
 */
export declare class BranchModelResults extends SpeakeasyBase {
    /**
     * The total number of results available for all pages
     */
    count?: number;
    /**
     * The resulting data returned from the paged query range
     */
    data?: BranchModel[];
}
