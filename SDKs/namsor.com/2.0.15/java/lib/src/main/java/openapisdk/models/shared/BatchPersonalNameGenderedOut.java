package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchPersonalNameGenderedOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalNames")
    public PersonalNameGenderedOut[] personalNames;
    public BatchPersonalNameGenderedOut withPersonalNames(PersonalNameGenderedOut[] personalNames) {
        this.personalNames = personalNames;
        return this;
    }
}