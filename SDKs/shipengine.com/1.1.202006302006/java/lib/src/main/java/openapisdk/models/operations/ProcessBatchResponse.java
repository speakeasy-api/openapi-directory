package openapisdk.models.operations;



public class ProcessBatchResponse {
    public String contentType;
    public ProcessBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProcessBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String emptyResponseBody;
    public ProcessBatchResponse withEmptyResponseBody(String emptyResponseBody) {
        this.emptyResponseBody = emptyResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ProcessBatchResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}