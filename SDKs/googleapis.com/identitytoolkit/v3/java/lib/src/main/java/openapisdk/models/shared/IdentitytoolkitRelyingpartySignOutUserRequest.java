package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentitytoolkitRelyingpartySignOutUserRequest
 * Request to sign out user.
**/
public class IdentitytoolkitRelyingpartySignOutUserRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceId")
    public String instanceId;
    public IdentitytoolkitRelyingpartySignOutUserRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localId")
    public String localId;
    public IdentitytoolkitRelyingpartySignOutUserRequest withLocalId(String localId) {
        this.localId = localId;
        return this;
    }
}