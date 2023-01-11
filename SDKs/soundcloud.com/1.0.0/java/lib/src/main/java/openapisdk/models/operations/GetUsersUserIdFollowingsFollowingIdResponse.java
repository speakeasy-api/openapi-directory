package openapisdk.models.operations;



public class GetUsersUserIdFollowingsFollowingIdResponse {
    public openapisdk.models.shared.CompleteUser completeUser;
    public GetUsersUserIdFollowingsFollowingIdResponse withCompleteUser(openapisdk.models.shared.CompleteUser completeUser) {
        this.completeUser = completeUser;
        return this;
    }
    public String contentType;
    public GetUsersUserIdFollowingsFollowingIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUsersUserIdFollowingsFollowingIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetUsersUserIdFollowingsFollowingIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}