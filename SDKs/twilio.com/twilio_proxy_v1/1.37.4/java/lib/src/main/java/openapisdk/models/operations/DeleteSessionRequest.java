package openapisdk.models.operations;



public class DeleteSessionRequest {
    public String serverURL;
    public DeleteSessionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSessionPathParams pathParams;
    public DeleteSessionRequest withPathParams(DeleteSessionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSessionSecurity security;
    public DeleteSessionRequest withSecurity(DeleteSessionSecurity security) {
        this.security = security;
        return this;
    }
}