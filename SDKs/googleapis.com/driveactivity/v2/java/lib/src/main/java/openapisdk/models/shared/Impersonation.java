package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Impersonation
 * Information about an impersonation, where an admin acts on behalf of an end user. Information about the acting admin is not currently available.
**/
public class Impersonation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impersonatedUser")
    public User impersonatedUser;
    public Impersonation withImpersonatedUser(User impersonatedUser) {
        this.impersonatedUser = impersonatedUser;
        return this;
    }
}