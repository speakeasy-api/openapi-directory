package openapisdk.models.operations;



public class FetchTrunkRequest {
    public String serverURL;
    public FetchTrunkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTrunkPathParams pathParams;
    public FetchTrunkRequest withPathParams(FetchTrunkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTrunkSecurity security;
    public FetchTrunkRequest withSecurity(FetchTrunkSecurity security) {
        this.security = security;
        return this;
    }
}