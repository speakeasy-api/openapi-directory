package openapisdk.models.operations;



public class DeleteChannelPrivacyUserResponse {
    public String contentType;
    public DeleteChannelPrivacyUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteChannelPrivacyUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DeleteChannelPrivacyUserResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}