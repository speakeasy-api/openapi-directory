package openapisdk.models.operations;



public class FetchSyncSyncListRequest {
    public String serverURL;
    public FetchSyncSyncListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSyncSyncListPathParams pathParams;
    public FetchSyncSyncListRequest withPathParams(FetchSyncSyncListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSyncSyncListSecurity security;
    public FetchSyncSyncListRequest withSecurity(FetchSyncSyncListSecurity security) {
        this.security = security;
        return this;
    }
}