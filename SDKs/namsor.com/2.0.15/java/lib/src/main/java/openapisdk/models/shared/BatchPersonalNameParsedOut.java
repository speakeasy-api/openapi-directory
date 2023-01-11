package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchPersonalNameParsedOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalNames")
    public PersonalNameParsedOut[] personalNames;
    public BatchPersonalNameParsedOut withPersonalNames(PersonalNameParsedOut[] personalNames) {
        this.personalNames = personalNames;
        return this;
    }
}