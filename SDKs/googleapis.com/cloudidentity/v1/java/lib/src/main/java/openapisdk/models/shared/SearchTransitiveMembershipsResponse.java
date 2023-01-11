package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchTransitiveMembershipsResponse
 * The response message for MembershipsService.SearchTransitiveMemberships.
**/
public class SearchTransitiveMembershipsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberships")
    public MemberRelation[] memberships;
    public SearchTransitiveMembershipsResponse withMemberships(MemberRelation[] memberships) {
        this.memberships = memberships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SearchTransitiveMembershipsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}