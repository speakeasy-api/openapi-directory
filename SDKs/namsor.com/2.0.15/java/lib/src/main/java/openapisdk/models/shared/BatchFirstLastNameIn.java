package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchFirstLastNameIn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalNames")
    public FirstLastNameIn[] personalNames;
    public BatchFirstLastNameIn withPersonalNames(FirstLastNameIn[] personalNames) {
        this.personalNames = personalNames;
        return this;
    }
}