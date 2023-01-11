package openapisdk.models.operations;



public class DeleteRateLimitResponse {
    public String contentType;
    public DeleteRateLimitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteRateLimitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}