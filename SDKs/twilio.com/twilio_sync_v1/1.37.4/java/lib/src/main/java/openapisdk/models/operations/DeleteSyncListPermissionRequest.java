package openapisdk.models.operations;



public class DeleteSyncListPermissionRequest {
    public String serverURL;
    public DeleteSyncListPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSyncListPermissionPathParams pathParams;
    public DeleteSyncListPermissionRequest withPathParams(DeleteSyncListPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSyncListPermissionSecurity security;
    public DeleteSyncListPermissionRequest withSecurity(DeleteSyncListPermissionSecurity security) {
        this.security = security;
        return this;
    }
}