package openapisdk.models.operations;



public class ListSipCredentialRequest {
    public String serverURL;
    public ListSipCredentialRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSipCredentialPathParams pathParams;
    public ListSipCredentialRequest withPathParams(ListSipCredentialPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSipCredentialQueryParams queryParams;
    public ListSipCredentialRequest withQueryParams(ListSipCredentialQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSipCredentialSecurity security;
    public ListSipCredentialRequest withSecurity(ListSipCredentialSecurity security) {
        this.security = security;
        return this;
    }
}