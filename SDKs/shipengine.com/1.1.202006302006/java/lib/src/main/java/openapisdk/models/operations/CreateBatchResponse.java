package openapisdk.models.operations;



public class CreateBatchResponse {
    public String contentType;
    public CreateBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CreateBatchResponseBody createBatchResponseBody;
    public CreateBatchResponse withCreateBatchResponseBody(openapisdk.models.shared.CreateBatchResponseBody createBatchResponseBody) {
        this.createBatchResponseBody = createBatchResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public CreateBatchResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}