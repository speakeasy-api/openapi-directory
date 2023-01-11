package openapisdk.models.operations;



public class PostUsersResponse {
    public String contentType;
    public PostUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostUsersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserResponse userResponse;
    public PostUsersResponse withUserResponse(openapisdk.models.shared.UserResponse userResponse) {
        this.userResponse = userResponse;
        return this;
    }
}