package openapisdk.models.operations;



public class UpdateProductResponse {
    public String contentType;
    public UpdateProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdateProductResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateProductResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}