package openapisdk.models.operations;



public class GetUserFollowingAlt1Response {
    public String contentType;
    public GetUserFollowingAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserFollowingAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public GetUserFollowingAlt1Response withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}