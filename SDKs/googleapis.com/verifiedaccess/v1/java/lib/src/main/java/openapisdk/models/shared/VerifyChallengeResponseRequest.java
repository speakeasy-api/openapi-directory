package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VerifyChallengeResponseRequest
 * signed ChallengeResponse
**/
public class VerifyChallengeResponseRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challengeResponse")
    public SignedData challengeResponse;
    public VerifyChallengeResponseRequest withChallengeResponse(SignedData challengeResponse) {
        this.challengeResponse = challengeResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedIdentity")
    public String expectedIdentity;
    public VerifyChallengeResponseRequest withExpectedIdentity(String expectedIdentity) {
        this.expectedIdentity = expectedIdentity;
        return this;
    }
}