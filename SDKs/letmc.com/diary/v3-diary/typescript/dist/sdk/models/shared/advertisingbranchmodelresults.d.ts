import { SpeakeasyBase } from "../../../internal/utils";
import { AdvertisingBranchModel } from "./advertisingbranchmodel";
/**
 * Holds results from a paged query returning BranchModel values
 */
export declare class AdvertisingBranchModelResults extends SpeakeasyBase {
    /**
     * The total number of results available for all pages
     */
    count?: number;
    /**
     * The resulting data returned from the paged query range
     */
    data?: AdvertisingBranchModel[];
}
