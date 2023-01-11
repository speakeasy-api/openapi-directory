package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrimaryAdmin
 * JSON template for primary admin in case of TEAM customers
**/
public class PrimaryAdmin {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryEmail")
    public String primaryEmail;
    public PrimaryAdmin withPrimaryEmail(String primaryEmail) {
        this.primaryEmail = primaryEmail;
        return this;
    }
}