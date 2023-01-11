package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PersonFollowEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("person")
    public java.util.Map<String, Object> person;
    public PersonFollowEmbedded withPerson(java.util.Map<String, Object> person) {
        this.person = person;
        return this;
    }
}