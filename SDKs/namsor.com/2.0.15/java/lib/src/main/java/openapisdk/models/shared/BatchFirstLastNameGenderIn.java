package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchFirstLastNameGenderIn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalNames")
    public FirstLastNameGenderIn[] personalNames;
    public BatchFirstLastNameGenderIn withPersonalNames(FirstLastNameGenderIn[] personalNames) {
        this.personalNames = personalNames;
        return this;
    }
}