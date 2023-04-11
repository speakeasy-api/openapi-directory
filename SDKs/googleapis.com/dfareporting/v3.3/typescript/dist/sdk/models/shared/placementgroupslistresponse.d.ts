import { SpeakeasyBase } from "../../../internal/utils";
import { PlacementGroup } from "./placementgroup";
/**
 * Placement Group List Response
 */
export declare class PlacementGroupsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroupsListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Placement group collection.
     */
    placementGroups?: PlacementGroup[];
}
