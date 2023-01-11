package openapisdk.models.operations;



public class FetchChallengeResponse {
    public String contentType;
    public FetchChallengeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchChallengeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceEntityChallenge verifyV2ServiceEntityChallenge;
    public FetchChallengeResponse withVerifyV2ServiceEntityChallenge(openapisdk.models.shared.VerifyV2ServiceEntityChallenge verifyV2ServiceEntityChallenge) {
        this.verifyV2ServiceEntityChallenge = verifyV2ServiceEntityChallenge;
        return this;
    }
}