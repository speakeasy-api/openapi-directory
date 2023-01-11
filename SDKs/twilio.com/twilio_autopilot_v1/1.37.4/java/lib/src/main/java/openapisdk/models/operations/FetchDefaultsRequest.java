package openapisdk.models.operations;



public class FetchDefaultsRequest {
    public String serverURL;
    public FetchDefaultsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchDefaultsPathParams pathParams;
    public FetchDefaultsRequest withPathParams(FetchDefaultsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchDefaultsSecurity security;
    public FetchDefaultsRequest withSecurity(FetchDefaultsSecurity security) {
        this.security = security;
        return this;
    }
}