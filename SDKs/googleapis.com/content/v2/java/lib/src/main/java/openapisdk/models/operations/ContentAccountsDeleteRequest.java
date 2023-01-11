package openapisdk.models.operations;



public class ContentAccountsDeleteRequest {
    public ContentAccountsDeletePathParams pathParams;
    public ContentAccountsDeleteRequest withPathParams(ContentAccountsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentAccountsDeleteQueryParams queryParams;
    public ContentAccountsDeleteRequest withQueryParams(ContentAccountsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentAccountsDeleteSecurity security;
    public ContentAccountsDeleteRequest withSecurity(ContentAccountsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}