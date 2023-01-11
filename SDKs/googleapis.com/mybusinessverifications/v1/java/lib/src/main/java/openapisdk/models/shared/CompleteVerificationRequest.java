package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompleteVerificationRequest
 * Request message for Verifications.CompleteVerificationAction.
**/
public class CompleteVerificationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pin")
    public String pin;
    public CompleteVerificationRequest withPin(String pin) {
        this.pin = pin;
        return this;
    }
}