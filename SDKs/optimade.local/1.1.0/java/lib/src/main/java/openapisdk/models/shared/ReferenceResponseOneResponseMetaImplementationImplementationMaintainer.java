package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReferenceResponseOneResponseMetaImplementationImplementationMaintainer
 * Details about the maintainer of the implementation
**/
public class ReferenceResponseOneResponseMetaImplementationImplementationMaintainer {
    @JsonProperty("email")
    public String email;
    public ReferenceResponseOneResponseMetaImplementationImplementationMaintainer withEmail(String email) {
        this.email = email;
        return this;
    }
}