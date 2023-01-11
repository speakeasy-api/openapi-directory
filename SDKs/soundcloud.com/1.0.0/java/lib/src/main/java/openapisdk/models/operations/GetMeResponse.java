package openapisdk.models.operations;



public class GetMeResponse {
    public openapisdk.models.shared.CompleteUser completeUser;
    public GetMeResponse withCompleteUser(openapisdk.models.shared.CompleteUser completeUser) {
        this.completeUser = completeUser;
        return this;
    }
    public String contentType;
    public GetMeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMeResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetMeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}