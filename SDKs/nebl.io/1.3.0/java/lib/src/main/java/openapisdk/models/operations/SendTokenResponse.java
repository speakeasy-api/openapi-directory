package openapisdk.models.operations;



public class SendTokenResponse {
    public String contentType;
    public SendTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public SendTokenResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public SendTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SendTokenResponse sendTokenResponse;
    public SendTokenResponse withSendTokenResponse(openapisdk.models.shared.SendTokenResponse sendTokenResponse) {
        this.sendTokenResponse = sendTokenResponse;
        return this;
    }
}