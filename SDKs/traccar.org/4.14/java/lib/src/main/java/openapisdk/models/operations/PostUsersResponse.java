package openapisdk.models.operations;



public class PostUsersResponse {
    public String contentType;
    public PostUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public PostUsersResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}