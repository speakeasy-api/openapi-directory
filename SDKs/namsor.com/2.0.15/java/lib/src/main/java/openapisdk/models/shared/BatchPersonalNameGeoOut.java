package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchPersonalNameGeoOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalNames")
    public PersonalNameGeoOut[] personalNames;
    public BatchPersonalNameGeoOut withPersonalNames(PersonalNameGeoOut[] personalNames) {
        this.personalNames = personalNames;
        return this;
    }
}