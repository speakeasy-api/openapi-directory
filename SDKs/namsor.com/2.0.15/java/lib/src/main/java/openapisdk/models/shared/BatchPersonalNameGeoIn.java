package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchPersonalNameGeoIn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalNames")
    public PersonalNameGeoIn[] personalNames;
    public BatchPersonalNameGeoIn withPersonalNames(PersonalNameGeoIn[] personalNames) {
        this.personalNames = personalNames;
        return this;
    }
}