package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContactInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ContactInformation withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ContactInformation withName(String name) {
        this.name = name;
        return this;
    }
}