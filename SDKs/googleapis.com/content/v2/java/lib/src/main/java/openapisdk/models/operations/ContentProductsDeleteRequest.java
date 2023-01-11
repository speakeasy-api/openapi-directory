package openapisdk.models.operations;



public class ContentProductsDeleteRequest {
    public ContentProductsDeletePathParams pathParams;
    public ContentProductsDeleteRequest withPathParams(ContentProductsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentProductsDeleteQueryParams queryParams;
    public ContentProductsDeleteRequest withQueryParams(ContentProductsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentProductsDeleteSecurity security;
    public ContentProductsDeleteRequest withSecurity(ContentProductsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}