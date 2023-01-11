package openapisdk.models.operations;



public class AddToBatchResponse {
    public String contentType;
    public AddToBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddToBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String emptyResponseBody;
    public AddToBatchResponse withEmptyResponseBody(String emptyResponseBody) {
        this.emptyResponseBody = emptyResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public AddToBatchResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}