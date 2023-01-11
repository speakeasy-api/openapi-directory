package openapisdk.models.operations;



public class GetDiscountResponse {
    public String contentType;
    public GetDiscountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DiscountResponse discountResponse;
    public GetDiscountResponse withDiscountResponse(openapisdk.models.shared.DiscountResponse discountResponse) {
        this.discountResponse = discountResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDiscountResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDiscountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}