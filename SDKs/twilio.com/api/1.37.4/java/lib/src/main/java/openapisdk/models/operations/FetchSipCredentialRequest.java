package openapisdk.models.operations;



public class FetchSipCredentialRequest {
    public String serverURL;
    public FetchSipCredentialRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSipCredentialPathParams pathParams;
    public FetchSipCredentialRequest withPathParams(FetchSipCredentialPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSipCredentialSecurity security;
    public FetchSipCredentialRequest withSecurity(FetchSipCredentialSecurity security) {
        this.security = security;
        return this;
    }
}