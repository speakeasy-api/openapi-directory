package openapisdk.models.operations;



public class FetchRateLimitRequest {
    public String serverURL;
    public FetchRateLimitRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchRateLimitPathParams pathParams;
    public FetchRateLimitRequest withPathParams(FetchRateLimitPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchRateLimitSecurity security;
    public FetchRateLimitRequest withSecurity(FetchRateLimitSecurity security) {
        this.security = security;
        return this;
    }
}