package openapisdk.models.operations;



public class DeleteProductRequest {
    public DeleteProductPathParams pathParams;
    public DeleteProductRequest withPathParams(DeleteProductPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteProductQueryParams queryParams;
    public DeleteProductRequest withQueryParams(DeleteProductQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteProductSecurity security;
    public DeleteProductRequest withSecurity(DeleteProductSecurity security) {
        this.security = security;
        return this;
    }
}