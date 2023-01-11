package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransitiveMembershipRole
 * Message representing the role of a TransitiveMembership.
**/
public class TransitiveMembershipRole {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public TransitiveMembershipRole withRole(String role) {
        this.role = role;
        return this;
    }
}