package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListClientUserInvitationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invitations")
    public ClientUserInvitation[] invitations;
    public ListClientUserInvitationsResponse withInvitations(ClientUserInvitation[] invitations) {
        this.invitations = invitations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListClientUserInvitationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}