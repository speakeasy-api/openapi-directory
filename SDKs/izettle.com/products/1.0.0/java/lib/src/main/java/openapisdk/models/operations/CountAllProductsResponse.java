package openapisdk.models.operations;



public class CountAllProductsResponse {
    public String contentType;
    public CountAllProductsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductCountResponse[] productCountResponses;
    public CountAllProductsResponse withProductCountResponses(openapisdk.models.shared.ProductCountResponse[] productCountResponses) {
        this.productCountResponses = productCountResponses;
        return this;
    }
    public Long statusCode;
    public CountAllProductsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}