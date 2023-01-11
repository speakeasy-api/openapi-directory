package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompleteVerificationResponse
 * Response message for Verifications.CompleteVerificationAction.
**/
public class CompleteVerificationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification")
    public Verification verification;
    public CompleteVerificationResponse withVerification(Verification verification) {
        this.verification = verification;
        return this;
    }
}