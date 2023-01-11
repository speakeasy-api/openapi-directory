package openapisdk.models.operations;



public class GetUserFollowingResponse {
    public String contentType;
    public GetUserFollowingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserFollowingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public GetUserFollowingResponse withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}