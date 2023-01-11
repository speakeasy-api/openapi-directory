package openapisdk.models.operations;



public class UpdateMeResponse {
    public String contentType;
    public UpdateMeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdateMeResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public UpdateMeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public UpdateMeResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}