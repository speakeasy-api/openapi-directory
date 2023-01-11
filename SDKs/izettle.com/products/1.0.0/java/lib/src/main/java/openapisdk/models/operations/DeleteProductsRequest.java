package openapisdk.models.operations;



public class DeleteProductsRequest {
    public DeleteProductsPathParams pathParams;
    public DeleteProductsRequest withPathParams(DeleteProductsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteProductsQueryParams queryParams;
    public DeleteProductsRequest withQueryParams(DeleteProductsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteProductsSecurity security;
    public DeleteProductsRequest withSecurity(DeleteProductsSecurity security) {
        this.security = security;
        return this;
    }
}