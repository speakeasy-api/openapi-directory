package openapisdk.models.operations;



public class DeleteSyncSyncMapPermissionRequest {
    public String serverURL;
    public DeleteSyncSyncMapPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSyncSyncMapPermissionPathParams pathParams;
    public DeleteSyncSyncMapPermissionRequest withPathParams(DeleteSyncSyncMapPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSyncSyncMapPermissionSecurity security;
    public DeleteSyncSyncMapPermissionRequest withSecurity(DeleteSyncSyncMapPermissionSecurity security) {
        this.security = security;
        return this;
    }
}