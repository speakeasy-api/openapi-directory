package openapisdk.models.operations;



public class ListRateLimitRequest {
    public String serverURL;
    public ListRateLimitRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListRateLimitPathParams pathParams;
    public ListRateLimitRequest withPathParams(ListRateLimitPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListRateLimitQueryParams queryParams;
    public ListRateLimitRequest withQueryParams(ListRateLimitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRateLimitSecurity security;
    public ListRateLimitRequest withSecurity(ListRateLimitSecurity security) {
        this.security = security;
        return this;
    }
}