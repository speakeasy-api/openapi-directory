package openapisdk.models.operations;



public class GetUsersUserIdResponse {
    public openapisdk.models.shared.CompleteUser completeUser;
    public GetUsersUserIdResponse withCompleteUser(openapisdk.models.shared.CompleteUser completeUser) {
        this.completeUser = completeUser;
        return this;
    }
    public String contentType;
    public GetUsersUserIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUsersUserIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetUsersUserIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}