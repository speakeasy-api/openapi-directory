package openapisdk.models.operations;



public class CreateProductResponse {
    public String contentType;
    public CreateProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateProductResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProductResponse productResponse;
    public CreateProductResponse withProductResponse(openapisdk.models.shared.ProductResponse productResponse) {
        this.productResponse = productResponse;
        return this;
    }
    public Long statusCode;
    public CreateProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}