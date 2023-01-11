package openapisdk.models.operations;



public class VerifiedaccessChallengeVerifyResponse {
    public String contentType;
    public VerifiedaccessChallengeVerifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VerifiedaccessChallengeVerifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyChallengeResponseResult verifyChallengeResponseResult;
    public VerifiedaccessChallengeVerifyResponse withVerifyChallengeResponseResult(openapisdk.models.shared.VerifyChallengeResponseResult verifyChallengeResponseResult) {
        this.verifyChallengeResponseResult = verifyChallengeResponseResult;
        return this;
    }
}