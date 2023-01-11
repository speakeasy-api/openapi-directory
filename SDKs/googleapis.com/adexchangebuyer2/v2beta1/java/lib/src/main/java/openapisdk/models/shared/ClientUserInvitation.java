package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientUserInvitation
 * An invitation for a new client user to get access to the Authorized Buyers UI. All fields are required unless otherwise specified.
**/
public class ClientUserInvitation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientAccountId")
    public String clientAccountId;
    public ClientUserInvitation withClientAccountId(String clientAccountId) {
        this.clientAccountId = clientAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ClientUserInvitation withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invitationId")
    public String invitationId;
    public ClientUserInvitation withInvitationId(String invitationId) {
        this.invitationId = invitationId;
        return this;
    }
}