package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InfoResponseResponseMetaImplementationImplementationMaintainer
 * Details about the maintainer of the implementation
**/
public class InfoResponseResponseMetaImplementationImplementationMaintainer {
    @JsonProperty("email")
    public String email;
    public InfoResponseResponseMetaImplementationImplementationMaintainer withEmail(String email) {
        this.email = email;
        return this;
    }
}