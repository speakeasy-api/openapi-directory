package openapisdk.models.operations;



public class ContentOrdersGetRequest {
    public ContentOrdersGetPathParams pathParams;
    public ContentOrdersGetRequest withPathParams(ContentOrdersGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersGetQueryParams queryParams;
    public ContentOrdersGetRequest withQueryParams(ContentOrdersGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentOrdersGetSecurity security;
    public ContentOrdersGetRequest withSecurity(ContentOrdersGetSecurity security) {
        this.security = security;
        return this;
    }
}