package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateVerificationTokenResponse
 * Response message for Verifications.GenerateVerificationToken.
**/
public class GenerateVerificationTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public VerificationToken token;
    public GenerateVerificationTokenResponse withToken(VerificationToken token) {
        this.token = token;
        return this;
    }
}