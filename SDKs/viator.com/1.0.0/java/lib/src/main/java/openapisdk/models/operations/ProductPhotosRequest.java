package openapisdk.models.operations;



public class ProductPhotosRequest {
    public ProductPhotosQueryParams queryParams;
    public ProductPhotosRequest withQueryParams(ProductPhotosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ProductPhotosHeaders headers;
    public ProductPhotosRequest withHeaders(ProductPhotosHeaders headers) {
        this.headers = headers;
        return this;
    }
}