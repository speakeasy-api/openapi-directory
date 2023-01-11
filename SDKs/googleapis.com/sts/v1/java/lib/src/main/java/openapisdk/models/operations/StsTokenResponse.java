package openapisdk.models.operations;



public class StsTokenResponse {
    public String contentType;
    public StsTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleIdentityStsV1ExchangeTokenResponse googleIdentityStsV1ExchangeTokenResponse;
    public StsTokenResponse withGoogleIdentityStsV1ExchangeTokenResponse(openapisdk.models.shared.GoogleIdentityStsV1ExchangeTokenResponse googleIdentityStsV1ExchangeTokenResponse) {
        this.googleIdentityStsV1ExchangeTokenResponse = googleIdentityStsV1ExchangeTokenResponse;
        return this;
    }
    public Long statusCode;
    public StsTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}