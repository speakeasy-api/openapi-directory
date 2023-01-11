package openapisdk.models.operations;



public class CreateChallengeResponse {
    public String contentType;
    public CreateChallengeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateChallengeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceEntityChallenge verifyV2ServiceEntityChallenge;
    public CreateChallengeResponse withVerifyV2ServiceEntityChallenge(openapisdk.models.shared.VerifyV2ServiceEntityChallenge verifyV2ServiceEntityChallenge) {
        this.verifyV2ServiceEntityChallenge = verifyV2ServiceEntityChallenge;
        return this;
    }
}