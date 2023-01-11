package openapisdk.models.operations;



public class UpdateDiscountResponse {
    public String contentType;
    public UpdateDiscountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdateDiscountResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateDiscountResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateDiscountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}