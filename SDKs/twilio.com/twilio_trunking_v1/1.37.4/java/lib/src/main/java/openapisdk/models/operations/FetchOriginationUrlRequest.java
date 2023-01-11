package openapisdk.models.operations;



public class FetchOriginationUrlRequest {
    public String serverURL;
    public FetchOriginationUrlRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchOriginationUrlPathParams pathParams;
    public FetchOriginationUrlRequest withPathParams(FetchOriginationUrlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchOriginationUrlSecurity security;
    public FetchOriginationUrlRequest withSecurity(FetchOriginationUrlSecurity security) {
        this.security = security;
        return this;
    }
}