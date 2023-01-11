package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListInvitationsResponse
 * Response when listing invitations.
**/
public class ListInvitationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invitations")
    public Invitation[] invitations;
    public ListInvitationsResponse withInvitations(Invitation[] invitations) {
        this.invitations = invitations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListInvitationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}