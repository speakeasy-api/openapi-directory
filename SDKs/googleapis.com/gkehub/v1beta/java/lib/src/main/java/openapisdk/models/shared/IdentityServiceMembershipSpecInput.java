package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityServiceMembershipSpecInput
 * **Anthos Identity Service**: Configuration for a single Membership.
**/
public class IdentityServiceMembershipSpecInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authMethods")
    public IdentityServiceAuthMethodInput[] authMethods;
    public IdentityServiceMembershipSpecInput withAuthMethods(IdentityServiceAuthMethodInput[] authMethods) {
        this.authMethods = authMethods;
        return this;
    }
}