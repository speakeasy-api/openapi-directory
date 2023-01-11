package openapisdk.models.operations;



public class StsTokenResponse {
    public String contentType;
    public StsTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleIdentityStsV1betaExchangeTokenResponse googleIdentityStsV1betaExchangeTokenResponse;
    public StsTokenResponse withGoogleIdentityStsV1betaExchangeTokenResponse(openapisdk.models.shared.GoogleIdentityStsV1betaExchangeTokenResponse googleIdentityStsV1betaExchangeTokenResponse) {
        this.googleIdentityStsV1betaExchangeTokenResponse = googleIdentityStsV1betaExchangeTokenResponse;
        return this;
    }
    public Long statusCode;
    public StsTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}