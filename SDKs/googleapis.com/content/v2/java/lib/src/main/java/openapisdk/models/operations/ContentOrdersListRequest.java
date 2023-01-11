package openapisdk.models.operations;



public class ContentOrdersListRequest {
    public ContentOrdersListPathParams pathParams;
    public ContentOrdersListRequest withPathParams(ContentOrdersListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersListQueryParams queryParams;
    public ContentOrdersListRequest withQueryParams(ContentOrdersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentOrdersListSecurity security;
    public ContentOrdersListRequest withSecurity(ContentOrdersListSecurity security) {
        this.security = security;
        return this;
    }
}