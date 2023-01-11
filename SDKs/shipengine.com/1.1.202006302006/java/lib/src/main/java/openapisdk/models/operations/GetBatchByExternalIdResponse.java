package openapisdk.models.operations;



public class GetBatchByExternalIdResponse {
    public String contentType;
    public GetBatchByExternalIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBatchByExternalIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public GetBatchByExternalIdResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.GetBatchByExternalIdResponseBody getBatchByExternalIdResponseBody;
    public GetBatchByExternalIdResponse withGetBatchByExternalIdResponseBody(openapisdk.models.shared.GetBatchByExternalIdResponseBody getBatchByExternalIdResponseBody) {
        this.getBatchByExternalIdResponseBody = getBatchByExternalIdResponseBody;
        return this;
    }
}