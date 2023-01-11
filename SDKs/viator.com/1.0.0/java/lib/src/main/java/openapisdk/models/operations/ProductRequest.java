package openapisdk.models.operations;



public class ProductRequest {
    public ProductQueryParams queryParams;
    public ProductRequest withQueryParams(ProductQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ProductHeaders headers;
    public ProductRequest withHeaders(ProductHeaders headers) {
        this.headers = headers;
        return this;
    }
}