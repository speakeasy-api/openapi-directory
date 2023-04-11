import { SpeakeasyBase } from "../../../internal/utils";
import { PlacementStrategy } from "./placementstrategy";
/**
 * Placement Strategy List Response
 */
export declare class PlacementStrategiesListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategiesListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Placement strategy collection.
     */
    placementStrategies?: PlacementStrategy[];
}
