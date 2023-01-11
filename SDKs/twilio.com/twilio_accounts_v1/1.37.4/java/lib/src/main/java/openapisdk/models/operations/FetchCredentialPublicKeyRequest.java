package openapisdk.models.operations;



public class FetchCredentialPublicKeyRequest {
    public String serverURL;
    public FetchCredentialPublicKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCredentialPublicKeyPathParams pathParams;
    public FetchCredentialPublicKeyRequest withPathParams(FetchCredentialPublicKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchCredentialPublicKeySecurity security;
    public FetchCredentialPublicKeyRequest withSecurity(FetchCredentialPublicKeySecurity security) {
        this.security = security;
        return this;
    }
}