package openapisdk.models.operations;



public class FetchKeyRequest {
    public String serverURL;
    public FetchKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchKeyPathParams pathParams;
    public FetchKeyRequest withPathParams(FetchKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchKeySecurity security;
    public FetchKeyRequest withSecurity(FetchKeySecurity security) {
        this.security = security;
        return this;
    }
}