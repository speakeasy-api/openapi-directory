package openapisdk.models.operations;



public class VerifiedaccessChallengeCreateResponse {
    public openapisdk.models.shared.Challenge challenge;
    public VerifiedaccessChallengeCreateResponse withChallenge(openapisdk.models.shared.Challenge challenge) {
        this.challenge = challenge;
        return this;
    }
    public String contentType;
    public VerifiedaccessChallengeCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VerifiedaccessChallengeCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}