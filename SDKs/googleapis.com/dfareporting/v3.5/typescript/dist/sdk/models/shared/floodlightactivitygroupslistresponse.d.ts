import { SpeakeasyBase } from "../../../internal/utils";
import { FloodlightActivityGroup } from "./floodlightactivitygroup";
/**
 * Floodlight Activity Group List Response
 */
export declare class FloodlightActivityGroupsListResponse extends SpeakeasyBase {
    /**
     * Floodlight activity group collection.
     */
    floodlightActivityGroups?: FloodlightActivityGroup[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroupsListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
