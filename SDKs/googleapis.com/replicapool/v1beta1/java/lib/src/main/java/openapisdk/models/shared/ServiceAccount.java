package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceAccount
 * A Compute Engine service account, identical to the Compute Engine resource.
**/
public class ServiceAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ServiceAccount withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopes")
    public String[] scopes;
    public ServiceAccount withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
}