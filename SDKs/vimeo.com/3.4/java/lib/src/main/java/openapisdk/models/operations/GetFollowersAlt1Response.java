package openapisdk.models.operations;



public class GetFollowersAlt1Response {
    public String contentType;
    public GetFollowersAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFollowersAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public GetFollowersAlt1Response withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}