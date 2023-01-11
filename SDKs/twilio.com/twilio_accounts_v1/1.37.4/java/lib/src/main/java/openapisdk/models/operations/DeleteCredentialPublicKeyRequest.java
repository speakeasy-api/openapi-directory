package openapisdk.models.operations;



public class DeleteCredentialPublicKeyRequest {
    public String serverURL;
    public DeleteCredentialPublicKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteCredentialPublicKeyPathParams pathParams;
    public DeleteCredentialPublicKeyRequest withPathParams(DeleteCredentialPublicKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCredentialPublicKeySecurity security;
    public DeleteCredentialPublicKeyRequest withSecurity(DeleteCredentialPublicKeySecurity security) {
        this.security = security;
        return this;
    }
}