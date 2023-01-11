package openapisdk.models.operations;



public class DeleteMeFollowingsUserIdResponse {
    public String contentType;
    public DeleteMeFollowingsUserIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DeleteMeFollowingsUserIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DeleteMeFollowingsUserIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}