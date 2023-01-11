package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse
 * Response message for the GenerateAppAttestChallenge method.
**/
public class GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge")
    public String challenge;
    public GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse withChallenge(String challenge) {
        this.challenge = challenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public String ttl;
    public GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse withTtl(String ttl) {
        this.ttl = ttl;
        return this;
    }
}