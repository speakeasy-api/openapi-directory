package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListGuestPoliciesResponse
 * A response message for listing guest policies.
**/
public class ListGuestPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestPolicies")
    public GuestPolicy[] guestPolicies;
    public ListGuestPoliciesResponse withGuestPolicies(GuestPolicy[] guestPolicies) {
        this.guestPolicies = guestPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListGuestPoliciesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}