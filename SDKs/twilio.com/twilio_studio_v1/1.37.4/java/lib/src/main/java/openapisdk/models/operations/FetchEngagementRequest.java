package openapisdk.models.operations;



public class FetchEngagementRequest {
    public String serverURL;
    public FetchEngagementRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchEngagementPathParams pathParams;
    public FetchEngagementRequest withPathParams(FetchEngagementPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchEngagementSecurity security;
    public FetchEngagementRequest withSecurity(FetchEngagementSecurity security) {
        this.security = security;
        return this;
    }
}