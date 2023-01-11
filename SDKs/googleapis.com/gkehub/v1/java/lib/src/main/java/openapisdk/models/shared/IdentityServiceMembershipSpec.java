package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityServiceMembershipSpec
 * **Anthos Identity Service**: Configuration for a single Membership.
**/
public class IdentityServiceMembershipSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authMethods")
    public IdentityServiceAuthMethod[] authMethods;
    public IdentityServiceMembershipSpec withAuthMethods(IdentityServiceAuthMethod[] authMethods) {
        this.authMethods = authMethods;
        return this;
    }
}