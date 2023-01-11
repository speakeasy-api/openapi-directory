package openapisdk.models.operations;



public class ListSipCredentialListRequest {
    public String serverURL;
    public ListSipCredentialListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSipCredentialListPathParams pathParams;
    public ListSipCredentialListRequest withPathParams(ListSipCredentialListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSipCredentialListQueryParams queryParams;
    public ListSipCredentialListRequest withQueryParams(ListSipCredentialListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSipCredentialListSecurity security;
    public ListSipCredentialListRequest withSecurity(ListSipCredentialListSecurity security) {
        this.security = security;
        return this;
    }
}