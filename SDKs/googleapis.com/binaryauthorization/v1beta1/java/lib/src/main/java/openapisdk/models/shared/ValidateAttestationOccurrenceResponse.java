package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValidateAttestationOccurrenceResponse
 * Response message for ValidationHelperV1.ValidateAttestationOccurrence.
**/
public class ValidateAttestationOccurrenceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("denialReason")
    public String denialReason;
    public ValidateAttestationOccurrenceResponse withDenialReason(String denialReason) {
        this.denialReason = denialReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public ValidateAttestationOccurrenceResponseResultEnum result;
    public ValidateAttestationOccurrenceResponse withResult(ValidateAttestationOccurrenceResponseResultEnum result) {
        this.result = result;
        return this;
    }
}