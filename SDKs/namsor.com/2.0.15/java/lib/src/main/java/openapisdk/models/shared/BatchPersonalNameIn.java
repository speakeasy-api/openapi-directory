package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchPersonalNameIn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalNames")
    public PersonalNameIn[] personalNames;
    public BatchPersonalNameIn withPersonalNames(PersonalNameIn[] personalNames) {
        this.personalNames = personalNames;
        return this;
    }
}