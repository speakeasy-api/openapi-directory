package openapisdk.models.operations;



public class FetchSyncMapPermissionRequest {
    public String serverURL;
    public FetchSyncMapPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSyncMapPermissionPathParams pathParams;
    public FetchSyncMapPermissionRequest withPathParams(FetchSyncMapPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSyncMapPermissionSecurity security;
    public FetchSyncMapPermissionRequest withSecurity(FetchSyncMapPermissionSecurity security) {
        this.security = security;
        return this;
    }
}