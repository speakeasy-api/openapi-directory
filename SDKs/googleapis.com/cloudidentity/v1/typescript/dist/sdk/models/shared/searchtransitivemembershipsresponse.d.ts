import { SpeakeasyBase } from "../../../internal/utils";
import { MemberRelation } from "./memberrelation";
/**
 * The response message for MembershipsService.SearchTransitiveMemberships.
 */
export declare class SearchTransitiveMembershipsResponse extends SpeakeasyBase {
    /**
     * List of transitive members satisfying the query.
     */
    memberships?: MemberRelation[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string;
}
