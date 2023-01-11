package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Contact
 * Representa a single contact's email address
**/
public class Contact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Contact withEmail(String email) {
        this.email = email;
        return this;
    }
}