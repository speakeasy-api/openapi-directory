package openapisdk.models.operations;



public class FetchSigningKeyRequest {
    public String serverURL;
    public FetchSigningKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSigningKeyPathParams pathParams;
    public FetchSigningKeyRequest withPathParams(FetchSigningKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSigningKeySecurity security;
    public FetchSigningKeyRequest withSecurity(FetchSigningKeySecurity security) {
        this.security = security;
        return this;
    }
}