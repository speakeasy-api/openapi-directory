package openapisdk.models.operations;



public class BloggerUsersGetResponse {
    public String contentType;
    public BloggerUsersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BloggerUsersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public BloggerUsersGetResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}