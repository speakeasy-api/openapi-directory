package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchFirstLastNameDiasporaedOut
 * Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.
**/
public class BatchFirstLastNameDiasporaedOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalNames")
    public FirstLastNameDiasporaedOut[] personalNames;
    public BatchFirstLastNameDiasporaedOut withPersonalNames(FirstLastNameDiasporaedOut[] personalNames) {
        this.personalNames = personalNames;
        return this;
    }
}