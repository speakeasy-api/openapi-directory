package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LinksResponseResponseMetaImplementationImplementationMaintainer
 * Details about the maintainer of the implementation
**/
public class LinksResponseResponseMetaImplementationImplementationMaintainer {
    @JsonProperty("email")
    public String email;
    public LinksResponseResponseMetaImplementationImplementationMaintainer withEmail(String email) {
        this.email = email;
        return this;
    }
}