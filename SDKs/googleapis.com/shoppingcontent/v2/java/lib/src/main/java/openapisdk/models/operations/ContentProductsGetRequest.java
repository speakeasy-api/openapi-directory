package openapisdk.models.operations;



public class ContentProductsGetRequest {
    public ContentProductsGetPathParams pathParams;
    public ContentProductsGetRequest withPathParams(ContentProductsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentProductsGetQueryParams queryParams;
    public ContentProductsGetRequest withQueryParams(ContentProductsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentProductsGetSecurity security;
    public ContentProductsGetRequest withSecurity(ContentProductsGetSecurity security) {
        this.security = security;
        return this;
    }
}