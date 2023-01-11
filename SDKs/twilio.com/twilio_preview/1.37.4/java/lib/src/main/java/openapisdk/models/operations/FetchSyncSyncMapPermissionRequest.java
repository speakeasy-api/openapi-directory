package openapisdk.models.operations;



public class FetchSyncSyncMapPermissionRequest {
    public String serverURL;
    public FetchSyncSyncMapPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSyncSyncMapPermissionPathParams pathParams;
    public FetchSyncSyncMapPermissionRequest withPathParams(FetchSyncSyncMapPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSyncSyncMapPermissionSecurity security;
    public FetchSyncSyncMapPermissionRequest withSecurity(FetchSyncSyncMapPermissionSecurity security) {
        this.security = security;
        return this;
    }
}