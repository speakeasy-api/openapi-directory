package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PatientAuthModeQueryResponseAuth {
    @JsonProperty("modes")
    public AuthenticationModeEnum[] modes;
    public PatientAuthModeQueryResponseAuth withModes(AuthenticationModeEnum[] modes) {
        this.modes = modes;
        return this;
    }
    @JsonProperty("purpose")
    public PatientAuthPurposeEnum purpose;
    public PatientAuthModeQueryResponseAuth withPurpose(PatientAuthPurposeEnum purpose) {
        this.purpose = purpose;
        return this;
    }
}