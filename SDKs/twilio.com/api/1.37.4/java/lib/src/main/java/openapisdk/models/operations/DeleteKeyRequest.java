package openapisdk.models.operations;



public class DeleteKeyRequest {
    public String serverURL;
    public DeleteKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteKeyPathParams pathParams;
    public DeleteKeyRequest withPathParams(DeleteKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteKeySecurity security;
    public DeleteKeyRequest withSecurity(DeleteKeySecurity security) {
        this.security = security;
        return this;
    }
}