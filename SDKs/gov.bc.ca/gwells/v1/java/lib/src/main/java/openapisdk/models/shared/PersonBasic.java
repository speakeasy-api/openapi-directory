package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PersonBasic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PersonBasic withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("person_guid")
    public String personGuid;
    public PersonBasic withPersonGuid(String personGuid) {
        this.personGuid = personGuid;
        return this;
    }
}