package openapisdk.models.operations;



public class StsOauthtokenResponse {
    public String contentType;
    public StsOauthtokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleIdentityStsV1ExchangeOauthTokenResponse googleIdentityStsV1ExchangeOauthTokenResponse;
    public StsOauthtokenResponse withGoogleIdentityStsV1ExchangeOauthTokenResponse(openapisdk.models.shared.GoogleIdentityStsV1ExchangeOauthTokenResponse googleIdentityStsV1ExchangeOauthTokenResponse) {
        this.googleIdentityStsV1ExchangeOauthTokenResponse = googleIdentityStsV1ExchangeOauthTokenResponse;
        return this;
    }
    public Long statusCode;
    public StsOauthtokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}