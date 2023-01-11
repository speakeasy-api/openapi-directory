package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Email {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Email withEmail(String email) {
        this.email = email;
        return this;
    }
}