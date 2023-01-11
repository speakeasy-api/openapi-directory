package openapisdk.models.operations;



public class CreateDiscountResponse {
    public String contentType;
    public CreateDiscountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateDiscountResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateDiscountResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateDiscountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}