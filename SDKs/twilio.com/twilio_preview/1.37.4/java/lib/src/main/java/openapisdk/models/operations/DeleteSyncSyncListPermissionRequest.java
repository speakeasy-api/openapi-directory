package openapisdk.models.operations;



public class DeleteSyncSyncListPermissionRequest {
    public String serverURL;
    public DeleteSyncSyncListPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSyncSyncListPermissionPathParams pathParams;
    public DeleteSyncSyncListPermissionRequest withPathParams(DeleteSyncSyncListPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSyncSyncListPermissionSecurity security;
    public DeleteSyncSyncListPermissionRequest withSecurity(DeleteSyncSyncListPermissionSecurity security) {
        this.security = security;
        return this;
    }
}