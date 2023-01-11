package openapisdk.models.operations;



public class FollowUsersResponse {
    public String contentType;
    public FollowUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FollowUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public FollowUsersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}