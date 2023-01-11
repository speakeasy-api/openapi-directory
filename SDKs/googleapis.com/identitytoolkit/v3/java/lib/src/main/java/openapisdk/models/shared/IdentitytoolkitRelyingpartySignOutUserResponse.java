package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentitytoolkitRelyingpartySignOutUserResponse
 * Response of signing out user.
**/
public class IdentitytoolkitRelyingpartySignOutUserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localId")
    public String localId;
    public IdentitytoolkitRelyingpartySignOutUserResponse withLocalId(String localId) {
        this.localId = localId;
        return this;
    }
}