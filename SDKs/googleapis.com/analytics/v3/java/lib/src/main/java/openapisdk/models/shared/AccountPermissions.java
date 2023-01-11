package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPermissions
 * Permissions the user has for this account.
**/
public class AccountPermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effective")
    public String[] effective;
    public AccountPermissions withEffective(String[] effective) {
        this.effective = effective;
        return this;
    }
}