package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchFirstLastNameGeoIn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalNames")
    public FirstLastNameGeoIn[] personalNames;
    public BatchFirstLastNameGeoIn withPersonalNames(FirstLastNameGeoIn[] personalNames) {
        this.personalNames = personalNames;
        return this;
    }
}