package openapisdk.models.operations;



public class DeleteCredentialListRequest {
    public String serverURL;
    public DeleteCredentialListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteCredentialListPathParams pathParams;
    public DeleteCredentialListRequest withPathParams(DeleteCredentialListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCredentialListSecurity security;
    public DeleteCredentialListRequest withSecurity(DeleteCredentialListSecurity security) {
        this.security = security;
        return this;
    }
}