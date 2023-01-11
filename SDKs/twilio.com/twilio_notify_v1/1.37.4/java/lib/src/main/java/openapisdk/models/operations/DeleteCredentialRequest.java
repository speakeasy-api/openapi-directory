package openapisdk.models.operations;



public class DeleteCredentialRequest {
    public String serverURL;
    public DeleteCredentialRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteCredentialPathParams pathParams;
    public DeleteCredentialRequest withPathParams(DeleteCredentialPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCredentialSecurity security;
    public DeleteCredentialRequest withSecurity(DeleteCredentialSecurity security) {
        this.security = security;
        return this;
    }
}