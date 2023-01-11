package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse
 * Response message for the GenerateAppAttestChallenge method.
**/
public class GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge")
    public String challenge;
    public GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse withChallenge(String challenge) {
        this.challenge = challenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public String ttl;
    public GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse withTtl(String ttl) {
        this.ttl = ttl;
        return this;
    }
}