package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StructureResponseManyResponseMetaImplementationImplementationMaintainer
 * Details about the maintainer of the implementation
**/
public class StructureResponseManyResponseMetaImplementationImplementationMaintainer {
    @JsonProperty("email")
    public String email;
    public StructureResponseManyResponseMetaImplementationImplementationMaintainer withEmail(String email) {
        this.email = email;
        return this;
    }
}