package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoveMatterPermissionsRequest
 * Remove an account as a matter collaborator.
**/
public class RemoveMatterPermissionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public RemoveMatterPermissionsRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}