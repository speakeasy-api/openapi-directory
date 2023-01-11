package openapisdk.models.operations;



public class DeleteSigningKeyRequest {
    public String serverURL;
    public DeleteSigningKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSigningKeyPathParams pathParams;
    public DeleteSigningKeyRequest withPathParams(DeleteSigningKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSigningKeySecurity security;
    public DeleteSigningKeyRequest withSecurity(DeleteSigningKeySecurity security) {
        this.security = security;
        return this;
    }
}