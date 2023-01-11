package openapisdk.models.operations;



public class FetchSyncListRequest {
    public String serverURL;
    public FetchSyncListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSyncListPathParams pathParams;
    public FetchSyncListRequest withPathParams(FetchSyncListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSyncListSecurity security;
    public FetchSyncListRequest withSecurity(FetchSyncListSecurity security) {
        this.security = security;
        return this;
    }
}