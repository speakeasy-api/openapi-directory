package openapisdk.models.operations;



public class DeleteSipCredentialRequest {
    public String serverURL;
    public DeleteSipCredentialRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSipCredentialPathParams pathParams;
    public DeleteSipCredentialRequest withPathParams(DeleteSipCredentialPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSipCredentialSecurity security;
    public DeleteSipCredentialRequest withSecurity(DeleteSipCredentialSecurity security) {
        this.security = security;
        return this;
    }
}