package openapisdk.models.operations;



public class ProductsApiListResponse {
    public String contentType;
    public ProductsApiListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductView[] productViews;
    public ProductsApiListResponse withProductViews(openapisdk.models.shared.ProductView[] productViews) {
        this.productViews = productViews;
        return this;
    }
    public Long statusCode;
    public ProductsApiListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}