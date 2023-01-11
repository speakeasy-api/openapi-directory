package openapisdk.models.operations;



public class FetchCredentialRequest {
    public String serverURL;
    public FetchCredentialRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCredentialPathParams pathParams;
    public FetchCredentialRequest withPathParams(FetchCredentialPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchCredentialSecurity security;
    public FetchCredentialRequest withSecurity(FetchCredentialSecurity security) {
        this.security = security;
        return this;
    }
}