package openapisdk.models.operations;



public class FetchByocTrunkRequest {
    public String serverURL;
    public FetchByocTrunkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchByocTrunkPathParams pathParams;
    public FetchByocTrunkRequest withPathParams(FetchByocTrunkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchByocTrunkSecurity security;
    public FetchByocTrunkRequest withSecurity(FetchByocTrunkSecurity security) {
        this.security = security;
        return this;
    }
}