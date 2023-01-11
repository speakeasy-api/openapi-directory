package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListMembershipsResponse
 * The response message for MembershipsService.ListMemberships.
**/
public class ListMembershipsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberships")
    public Membership[] memberships;
    public ListMembershipsResponse withMemberships(Membership[] memberships) {
        this.memberships = memberships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListMembershipsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}