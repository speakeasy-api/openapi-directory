package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse
 * Response message for the GeneratePlayIntegrityChallenge method.
**/
public class GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge")
    public String challenge;
    public GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse withChallenge(String challenge) {
        this.challenge = challenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public String ttl;
    public GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse withTtl(String ttl) {
        this.ttl = ttl;
        return this;
    }
}