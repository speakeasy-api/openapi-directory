package openapisdk.models.operations;



public class GetMeFollowersFollowerIdResponse {
    public String contentType;
    public GetMeFollowersFollowerIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMeFollowersFollowerIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetMeFollowersFollowerIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public GetMeFollowersFollowerIdResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}