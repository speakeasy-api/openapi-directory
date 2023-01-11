package openapisdk.models.operations;



public class GetVideoLikesResponse {
    public String contentType;
    public GetVideoLikesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideoLikesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public GetVideoLikesResponse withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}