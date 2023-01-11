package openapisdk.models.operations;



public class GetVodLikesResponse {
    public String contentType;
    public GetVodLikesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVodLikesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public GetVodLikesResponse withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}