import { SpeakeasyBase } from "../../../internal/utils";
import { GroupRelation } from "./grouprelation";
/**
 * The response message for MembershipsService.SearchTransitiveGroups.
 */
export declare class SearchTransitiveGroupsResponse extends SpeakeasyBase {
    /**
     * List of transitive groups satisfying the query.
     */
    memberships?: GroupRelation[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results available for listing.
     */
    nextPageToken?: string;
}
