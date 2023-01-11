package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest
 * Request message for the ExchangeAppAttestAssertion method.
**/
public class GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifact")
    public String artifact;
    public GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest withArtifact(String artifact) {
        this.artifact = artifact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assertion")
    public String assertion;
    public GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest withAssertion(String assertion) {
        this.assertion = assertion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge")
    public String challenge;
    public GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest withChallenge(String challenge) {
        this.challenge = challenge;
        return this;
    }
}