package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProfilePermissions
 * Permissions the user has for this view (profile).
**/
public class ProfilePermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effective")
    public String[] effective;
    public ProfilePermissions withEffective(String[] effective) {
        this.effective = effective;
        return this;
    }
}