package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchFirstLastNameGeoZippedIn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalNames")
    public FirstLastNameGeoZippedIn[] personalNames;
    public BatchFirstLastNameGeoZippedIn withPersonalNames(FirstLastNameGeoZippedIn[] personalNames) {
        this.personalNames = personalNames;
        return this;
    }
}