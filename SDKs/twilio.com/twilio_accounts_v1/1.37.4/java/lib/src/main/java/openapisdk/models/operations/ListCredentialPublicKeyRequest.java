package openapisdk.models.operations;



public class ListCredentialPublicKeyRequest {
    public String serverURL;
    public ListCredentialPublicKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListCredentialPublicKeyQueryParams queryParams;
    public ListCredentialPublicKeyRequest withQueryParams(ListCredentialPublicKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCredentialPublicKeySecurity security;
    public ListCredentialPublicKeyRequest withSecurity(ListCredentialPublicKeySecurity security) {
        this.security = security;
        return this;
    }
}