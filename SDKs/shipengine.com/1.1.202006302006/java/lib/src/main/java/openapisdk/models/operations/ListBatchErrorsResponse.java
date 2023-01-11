package openapisdk.models.operations;



public class ListBatchErrorsResponse {
    public String contentType;
    public ListBatchErrorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListBatchErrorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ListBatchErrorsResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.ListBatchErrorsResponseBody listBatchErrorsResponseBody;
    public ListBatchErrorsResponse withListBatchErrorsResponseBody(openapisdk.models.shared.ListBatchErrorsResponseBody listBatchErrorsResponseBody) {
        this.listBatchErrorsResponseBody = listBatchErrorsResponseBody;
        return this;
    }
}