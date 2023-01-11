package openapisdk.models.operations;



public class DeleteBatchResponse {
    public String contentType;
    public DeleteBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String emptyResponseBody;
    public DeleteBatchResponse withEmptyResponseBody(String emptyResponseBody) {
        this.emptyResponseBody = emptyResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public DeleteBatchResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}