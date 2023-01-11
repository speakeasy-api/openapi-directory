package openapisdk.models.operations;



public class ContentProductsListResponse {
    public String contentType;
    public ContentProductsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductsListResponse productsListResponse;
    public ContentProductsListResponse withProductsListResponse(openapisdk.models.shared.ProductsListResponse productsListResponse) {
        this.productsListResponse = productsListResponse;
        return this;
    }
    public Long statusCode;
    public ContentProductsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}