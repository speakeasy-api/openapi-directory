package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchTransitiveGroupsResponse
 * The response message for MembershipsService.SearchTransitiveGroups.
**/
public class SearchTransitiveGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberships")
    public GroupRelation[] memberships;
    public SearchTransitiveGroupsResponse withMemberships(GroupRelation[] memberships) {
        this.memberships = memberships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SearchTransitiveGroupsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}