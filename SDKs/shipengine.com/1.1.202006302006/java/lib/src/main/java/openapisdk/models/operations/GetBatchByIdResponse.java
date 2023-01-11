package openapisdk.models.operations;



public class GetBatchByIdResponse {
    public String contentType;
    public GetBatchByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBatchByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public GetBatchByIdResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.GetBatchByIdResponseBody getBatchByIdResponseBody;
    public GetBatchByIdResponse withGetBatchByIdResponseBody(openapisdk.models.shared.GetBatchByIdResponseBody getBatchByIdResponseBody) {
        this.getBatchByIdResponseBody = getBatchByIdResponseBody;
        return this;
    }
}