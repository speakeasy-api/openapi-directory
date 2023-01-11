package openapisdk.models.operations;



public class TestnetSendTokenResponse {
    public String contentType;
    public TestnetSendTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public TestnetSendTokenResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public TestnetSendTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SendTokenResponse sendTokenResponse;
    public TestnetSendTokenResponse withSendTokenResponse(openapisdk.models.shared.SendTokenResponse sendTokenResponse) {
        this.sendTokenResponse = sendTokenResponse;
        return this;
    }
}