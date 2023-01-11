package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListUserInvitationsResponse
 * Response message for UserInvitation listing request.
**/
public class ListUserInvitationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListUserInvitationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userInvitations")
    public UserInvitation[] userInvitations;
    public ListUserInvitationsResponse withUserInvitations(UserInvitation[] userInvitations) {
        this.userInvitations = userInvitations;
        return this;
    }
}