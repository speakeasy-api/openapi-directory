package openapisdk.models.operations;



public class FetchAccessTokenResponse {
    public String contentType;
    public FetchAccessTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchAccessTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceAccessToken verifyV2ServiceAccessToken;
    public FetchAccessTokenResponse withVerifyV2ServiceAccessToken(openapisdk.models.shared.VerifyV2ServiceAccessToken verifyV2ServiceAccessToken) {
        this.verifyV2ServiceAccessToken = verifyV2ServiceAccessToken;
        return this;
    }
}