import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeGroup } from "./creativegroup";
/**
 * Creative Group List Response
 */
export declare class CreativeGroupsListResponse extends SpeakeasyBase {
    /**
     * Creative group collection.
     */
    creativeGroups?: CreativeGroup[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroupsListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
