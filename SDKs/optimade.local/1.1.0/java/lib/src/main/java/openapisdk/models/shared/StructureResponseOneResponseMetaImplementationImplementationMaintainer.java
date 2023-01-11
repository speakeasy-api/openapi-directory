package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StructureResponseOneResponseMetaImplementationImplementationMaintainer
 * Details about the maintainer of the implementation
**/
public class StructureResponseOneResponseMetaImplementationImplementationMaintainer {
    @JsonProperty("email")
    public String email;
    public StructureResponseOneResponseMetaImplementationImplementationMaintainer withEmail(String email) {
        this.email = email;
        return this;
    }
}