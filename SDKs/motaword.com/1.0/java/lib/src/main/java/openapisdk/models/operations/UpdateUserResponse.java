package openapisdk.models.operations;



public class UpdateUserResponse {
    public String contentType;
    public UpdateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdateUserResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public UpdateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public UpdateUserResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}