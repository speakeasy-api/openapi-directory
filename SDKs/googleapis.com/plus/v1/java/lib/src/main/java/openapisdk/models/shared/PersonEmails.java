package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PersonEmails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public PersonEmails withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public PersonEmails withValue(String value) {
        this.value = value;
        return this;
    }
}