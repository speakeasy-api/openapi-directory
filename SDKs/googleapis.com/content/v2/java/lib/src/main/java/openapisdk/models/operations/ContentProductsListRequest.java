package openapisdk.models.operations;



public class ContentProductsListRequest {
    public ContentProductsListPathParams pathParams;
    public ContentProductsListRequest withPathParams(ContentProductsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentProductsListQueryParams queryParams;
    public ContentProductsListRequest withQueryParams(ContentProductsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentProductsListSecurity security;
    public ContentProductsListRequest withSecurity(ContentProductsListSecurity security) {
        this.security = security;
        return this;
    }
}