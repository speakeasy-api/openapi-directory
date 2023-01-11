package openapisdk.models.operations;



public class StsIntrospectResponse {
    public String contentType;
    public StsIntrospectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleIdentityStsV1IntrospectTokenResponse googleIdentityStsV1IntrospectTokenResponse;
    public StsIntrospectResponse withGoogleIdentityStsV1IntrospectTokenResponse(openapisdk.models.shared.GoogleIdentityStsV1IntrospectTokenResponse googleIdentityStsV1IntrospectTokenResponse) {
        this.googleIdentityStsV1IntrospectTokenResponse = googleIdentityStsV1IntrospectTokenResponse;
        return this;
    }
    public Long statusCode;
    public StsIntrospectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}