package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchMatchPersonalFirstLastNameIn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalNames")
    public MatchPersonalFirstLastNameIn[] personalNames;
    public BatchMatchPersonalFirstLastNameIn withPersonalNames(MatchPersonalFirstLastNameIn[] personalNames) {
        this.personalNames = personalNames;
        return this;
    }
}