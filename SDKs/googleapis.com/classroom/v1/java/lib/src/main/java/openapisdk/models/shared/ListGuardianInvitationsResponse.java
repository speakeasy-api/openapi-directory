package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListGuardianInvitationsResponse
 * Response when listing guardian invitations.
**/
public class ListGuardianInvitationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guardianInvitations")
    public GuardianInvitation[] guardianInvitations;
    public ListGuardianInvitationsResponse withGuardianInvitations(GuardianInvitation[] guardianInvitations) {
        this.guardianInvitations = guardianInvitations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListGuardianInvitationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}