package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebpropertyPermissions
 * Permissions the user has for this web property.
**/
public class WebpropertyPermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effective")
    public String[] effective;
    public WebpropertyPermissions withEffective(String[] effective) {
        this.effective = effective;
        return this;
    }
}