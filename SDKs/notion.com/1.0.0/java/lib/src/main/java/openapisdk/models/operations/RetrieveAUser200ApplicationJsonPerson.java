package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveAUser200ApplicationJsonPerson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public RetrieveAUser200ApplicationJsonPerson withEmail(String email) {
        this.email = email;
        return this;
    }
}