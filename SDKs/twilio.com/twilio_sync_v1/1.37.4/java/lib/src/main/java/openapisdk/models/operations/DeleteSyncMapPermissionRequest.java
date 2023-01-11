package openapisdk.models.operations;



public class DeleteSyncMapPermissionRequest {
    public String serverURL;
    public DeleteSyncMapPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSyncMapPermissionPathParams pathParams;
    public DeleteSyncMapPermissionRequest withPathParams(DeleteSyncMapPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSyncMapPermissionSecurity security;
    public DeleteSyncMapPermissionRequest withSecurity(DeleteSyncMapPermissionSecurity security) {
        this.security = security;
        return this;
    }
}