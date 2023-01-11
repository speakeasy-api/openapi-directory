package openapisdk.models.operations;



public class FetchSyncListPermissionRequest {
    public String serverURL;
    public FetchSyncListPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSyncListPermissionPathParams pathParams;
    public FetchSyncListPermissionRequest withPathParams(FetchSyncListPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSyncListPermissionSecurity security;
    public FetchSyncListPermissionRequest withSecurity(FetchSyncListPermissionSecurity security) {
        this.security = security;
        return this;
    }
}