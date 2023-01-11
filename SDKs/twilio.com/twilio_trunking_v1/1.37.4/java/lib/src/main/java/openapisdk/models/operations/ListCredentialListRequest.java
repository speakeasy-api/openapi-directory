package openapisdk.models.operations;



public class ListCredentialListRequest {
    public String serverURL;
    public ListCredentialListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListCredentialListPathParams pathParams;
    public ListCredentialListRequest withPathParams(ListCredentialListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListCredentialListQueryParams queryParams;
    public ListCredentialListRequest withQueryParams(ListCredentialListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCredentialListSecurity security;
    public ListCredentialListRequest withSecurity(ListCredentialListSecurity security) {
        this.security = security;
        return this;
    }
}