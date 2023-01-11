package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValidateAttestationOccurrenceRequest
 * Request message for ValidationHelperV1.ValidateAttestationOccurrence.
**/
public class ValidateAttestationOccurrenceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attestation")
    public AttestationOccurrence attestation;
    public ValidateAttestationOccurrenceRequest withAttestation(AttestationOccurrence attestation) {
        this.attestation = attestation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occurrenceNote")
    public String occurrenceNote;
    public ValidateAttestationOccurrenceRequest withOccurrenceNote(String occurrenceNote) {
        this.occurrenceNote = occurrenceNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occurrenceResourceUri")
    public String occurrenceResourceUri;
    public ValidateAttestationOccurrenceRequest withOccurrenceResourceUri(String occurrenceResourceUri) {
        this.occurrenceResourceUri = occurrenceResourceUri;
        return this;
    }
}