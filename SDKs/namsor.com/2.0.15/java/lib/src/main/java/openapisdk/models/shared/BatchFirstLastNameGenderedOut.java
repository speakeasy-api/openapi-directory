package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchFirstLastNameGenderedOut
 * Represents the output of inferring the LIKELY gender from a list of personal names.
**/
public class BatchFirstLastNameGenderedOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalNames")
    public FirstLastNameGenderedOut[] personalNames;
    public BatchFirstLastNameGenderedOut withPersonalNames(FirstLastNameGenderedOut[] personalNames) {
        this.personalNames = personalNames;
        return this;
    }
}