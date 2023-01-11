package openapisdk.models.operations;



public class ContentAccountsListRequest {
    public ContentAccountsListPathParams pathParams;
    public ContentAccountsListRequest withPathParams(ContentAccountsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentAccountsListQueryParams queryParams;
    public ContentAccountsListRequest withQueryParams(ContentAccountsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentAccountsListSecurity security;
    public ContentAccountsListRequest withSecurity(ContentAccountsListSecurity security) {
        this.security = security;
        return this;
    }
}