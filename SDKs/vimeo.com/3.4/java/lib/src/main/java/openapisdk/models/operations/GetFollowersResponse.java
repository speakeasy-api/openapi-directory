package openapisdk.models.operations;



public class GetFollowersResponse {
    public String contentType;
    public GetFollowersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFollowersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public GetFollowersResponse withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}