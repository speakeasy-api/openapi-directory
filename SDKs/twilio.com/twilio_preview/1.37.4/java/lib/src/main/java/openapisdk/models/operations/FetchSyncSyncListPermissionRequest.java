package openapisdk.models.operations;



public class FetchSyncSyncListPermissionRequest {
    public String serverURL;
    public FetchSyncSyncListPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSyncSyncListPermissionPathParams pathParams;
    public FetchSyncSyncListPermissionRequest withPathParams(FetchSyncSyncListPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSyncSyncListPermissionSecurity security;
    public FetchSyncSyncListPermissionRequest withSecurity(FetchSyncSyncListPermissionSecurity security) {
        this.security = security;
        return this;
    }
}