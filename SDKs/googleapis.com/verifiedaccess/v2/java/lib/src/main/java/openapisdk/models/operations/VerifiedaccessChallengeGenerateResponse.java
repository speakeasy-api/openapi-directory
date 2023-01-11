package openapisdk.models.operations;



public class VerifiedaccessChallengeGenerateResponse {
    public openapisdk.models.shared.Challenge challenge;
    public VerifiedaccessChallengeGenerateResponse withChallenge(openapisdk.models.shared.Challenge challenge) {
        this.challenge = challenge;
        return this;
    }
    public String contentType;
    public VerifiedaccessChallengeGenerateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VerifiedaccessChallengeGenerateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}