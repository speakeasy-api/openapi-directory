package openapisdk.models.operations;



public class ListSyncSyncMapPermissionRequest {
    public String serverURL;
    public ListSyncSyncMapPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSyncSyncMapPermissionPathParams pathParams;
    public ListSyncSyncMapPermissionRequest withPathParams(ListSyncSyncMapPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSyncSyncMapPermissionQueryParams queryParams;
    public ListSyncSyncMapPermissionRequest withQueryParams(ListSyncSyncMapPermissionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSyncSyncMapPermissionSecurity security;
    public ListSyncSyncMapPermissionRequest withSecurity(ListSyncSyncMapPermissionSecurity security) {
        this.security = security;
        return this;
    }
}