package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchFirstLastNameOriginedOut
 * Represents the output of inferring the LIKELY origin from a list of personal names.
**/
public class BatchFirstLastNameOriginedOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalNames")
    public FirstLastNameOriginedOut[] personalNames;
    public BatchFirstLastNameOriginedOut withPersonalNames(FirstLastNameOriginedOut[] personalNames) {
        this.personalNames = personalNames;
        return this;
    }
}