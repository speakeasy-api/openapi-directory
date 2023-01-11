package openapisdk.models.operations;



public class DeleteSipCredentialListRequest {
    public String serverURL;
    public DeleteSipCredentialListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSipCredentialListPathParams pathParams;
    public DeleteSipCredentialListRequest withPathParams(DeleteSipCredentialListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSipCredentialListSecurity security;
    public DeleteSipCredentialListRequest withSecurity(DeleteSipCredentialListSecurity security) {
        this.security = security;
        return this;
    }
}