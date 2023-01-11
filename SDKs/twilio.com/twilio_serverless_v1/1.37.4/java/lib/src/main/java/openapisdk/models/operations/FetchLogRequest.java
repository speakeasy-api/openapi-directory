package openapisdk.models.operations;



public class FetchLogRequest {
    public String serverURL;
    public FetchLogRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchLogPathParams pathParams;
    public FetchLogRequest withPathParams(FetchLogPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchLogSecurity security;
    public FetchLogRequest withSecurity(FetchLogSecurity security) {
        this.security = security;
        return this;
    }
}