package openapisdk.models.operations;



public class FetchEngagementContextRequest {
    public String serverURL;
    public FetchEngagementContextRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchEngagementContextPathParams pathParams;
    public FetchEngagementContextRequest withPathParams(FetchEngagementContextPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchEngagementContextSecurity security;
    public FetchEngagementContextRequest withSecurity(FetchEngagementContextSecurity security) {
        this.security = security;
        return this;
    }
}