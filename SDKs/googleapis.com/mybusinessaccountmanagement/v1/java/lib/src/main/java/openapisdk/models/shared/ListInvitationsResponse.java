package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListInvitationsResponse
 * Response message for AccessControl.ListInvitations.
**/
public class ListInvitationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invitations")
    public Invitation[] invitations;
    public ListInvitationsResponse withInvitations(Invitation[] invitations) {
        this.invitations = invitations;
        return this;
    }
}