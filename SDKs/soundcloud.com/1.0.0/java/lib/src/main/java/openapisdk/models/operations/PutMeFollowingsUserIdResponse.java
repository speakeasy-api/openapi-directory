package openapisdk.models.operations;



public class PutMeFollowingsUserIdResponse {
    public String contentType;
    public PutMeFollowingsUserIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PutMeFollowingsUserIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PutMeFollowingsUserIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public PutMeFollowingsUserIdResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}