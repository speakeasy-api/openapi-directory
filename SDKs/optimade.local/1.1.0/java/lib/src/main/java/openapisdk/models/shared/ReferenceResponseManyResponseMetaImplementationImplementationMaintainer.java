package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReferenceResponseManyResponseMetaImplementationImplementationMaintainer
 * Details about the maintainer of the implementation
**/
public class ReferenceResponseManyResponseMetaImplementationImplementationMaintainer {
    @JsonProperty("email")
    public String email;
    public ReferenceResponseManyResponseMetaImplementationImplementationMaintainer withEmail(String email) {
        this.email = email;
        return this;
    }
}