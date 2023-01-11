package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MatchPersonalFirstLastNameIn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public MatchPersonalFirstLastNameIn withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name1")
    public FirstLastNameIn name1;
    public MatchPersonalFirstLastNameIn withName1(FirstLastNameIn name1) {
        this.name1 = name1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name2")
    public PersonalNameIn name2;
    public MatchPersonalFirstLastNameIn withName2(PersonalNameIn name2) {
        this.name2 = name2;
        return this;
    }
}