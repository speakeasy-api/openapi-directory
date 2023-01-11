package openapisdk.models.operations;



public class ContentAccountsGetRequest {
    public ContentAccountsGetPathParams pathParams;
    public ContentAccountsGetRequest withPathParams(ContentAccountsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentAccountsGetQueryParams queryParams;
    public ContentAccountsGetRequest withQueryParams(ContentAccountsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentAccountsGetSecurity security;
    public ContentAccountsGetRequest withSecurity(ContentAccountsGetSecurity security) {
        this.security = security;
        return this;
    }
}