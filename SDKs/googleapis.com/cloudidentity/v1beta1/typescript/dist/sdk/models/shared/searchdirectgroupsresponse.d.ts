import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipRelation } from "./membershiprelation";
/**
 * The response message for MembershipsService.SearchDirectGroups.
 */
export declare class SearchDirectGroupsResponse extends SpeakeasyBase {
    /**
     * List of direct groups satisfying the query.
     */
    memberships?: MembershipRelation[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results available for listing.
     */
    nextPageToken?: string;
}
