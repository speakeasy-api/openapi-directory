package openapisdk.models.operations;



public class ListBatchesResponse {
    public String contentType;
    public ListBatchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListBatchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ListBatchesResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.ListBatchesResponseBody listBatchesResponseBody;
    public ListBatchesResponse withListBatchesResponseBody(openapisdk.models.shared.ListBatchesResponseBody listBatchesResponseBody) {
        this.listBatchesResponseBody = listBatchesResponseBody;
        return this;
    }
}