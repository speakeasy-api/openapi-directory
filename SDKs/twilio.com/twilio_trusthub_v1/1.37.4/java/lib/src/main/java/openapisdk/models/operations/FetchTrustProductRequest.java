package openapisdk.models.operations;



public class FetchTrustProductRequest {
    public String serverURL;
    public FetchTrustProductRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTrustProductPathParams pathParams;
    public FetchTrustProductRequest withPathParams(FetchTrustProductPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTrustProductSecurity security;
    public FetchTrustProductRequest withSecurity(FetchTrustProductSecurity security) {
        this.security = security;
        return this;
    }
}