package openapisdk.models.operations;



public class GetMeFollowingsUserIdResponse {
    public String contentType;
    public GetMeFollowingsUserIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMeFollowingsUserIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetMeFollowingsUserIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public GetMeFollowingsUserIdResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}