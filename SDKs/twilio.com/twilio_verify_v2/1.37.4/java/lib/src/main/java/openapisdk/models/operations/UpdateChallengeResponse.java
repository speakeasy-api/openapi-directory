package openapisdk.models.operations;



public class UpdateChallengeResponse {
    public String contentType;
    public UpdateChallengeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateChallengeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceEntityChallenge verifyV2ServiceEntityChallenge;
    public UpdateChallengeResponse withVerifyV2ServiceEntityChallenge(openapisdk.models.shared.VerifyV2ServiceEntityChallenge verifyV2ServiceEntityChallenge) {
        this.verifyV2ServiceEntityChallenge = verifyV2ServiceEntityChallenge;
        return this;
    }
}