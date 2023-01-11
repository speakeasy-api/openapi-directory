package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientUser
 * A client user is created under a client buyer and has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client buyer. The only way a new client user can be created is through accepting an email invitation (see the accounts.clients.invitations.create method). All fields are required unless otherwise specified.
**/
public class ClientUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientAccountId")
    public String clientAccountId;
    public ClientUser withClientAccountId(String clientAccountId) {
        this.clientAccountId = clientAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ClientUser withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ClientUserStatusEnum status;
    public ClientUser withStatus(ClientUserStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public ClientUser withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}