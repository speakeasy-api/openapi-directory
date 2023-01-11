package openapisdk.models.operations;



public class CreateAccessTokenResponse {
    public String contentType;
    public CreateAccessTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateAccessTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceAccessToken verifyV2ServiceAccessToken;
    public CreateAccessTokenResponse withVerifyV2ServiceAccessToken(openapisdk.models.shared.VerifyV2ServiceAccessToken verifyV2ServiceAccessToken) {
        this.verifyV2ServiceAccessToken = verifyV2ServiceAccessToken;
        return this;
    }
}