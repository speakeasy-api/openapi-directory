package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EntryInfoResponseResponseMetaImplementationImplementationMaintainer
 * Details about the maintainer of the implementation
**/
public class EntryInfoResponseResponseMetaImplementationImplementationMaintainer {
    @JsonProperty("email")
    public String email;
    public EntryInfoResponseResponseMetaImplementationImplementationMaintainer withEmail(String email) {
        this.email = email;
        return this;
    }
}