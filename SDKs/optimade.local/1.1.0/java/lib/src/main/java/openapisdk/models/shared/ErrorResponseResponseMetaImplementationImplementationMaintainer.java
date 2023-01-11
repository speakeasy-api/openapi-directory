package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErrorResponseResponseMetaImplementationImplementationMaintainer
 * Details about the maintainer of the implementation
**/
public class ErrorResponseResponseMetaImplementationImplementationMaintainer {
    @JsonProperty("email")
    public String email;
    public ErrorResponseResponseMetaImplementationImplementationMaintainer withEmail(String email) {
        this.email = email;
        return this;
    }
}