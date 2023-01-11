package openapisdk.models.operations;



public class ListSyncMapPermissionRequest {
    public String serverURL;
    public ListSyncMapPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSyncMapPermissionPathParams pathParams;
    public ListSyncMapPermissionRequest withPathParams(ListSyncMapPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSyncMapPermissionQueryParams queryParams;
    public ListSyncMapPermissionRequest withQueryParams(ListSyncMapPermissionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSyncMapPermissionSecurity security;
    public ListSyncMapPermissionRequest withSecurity(ListSyncMapPermissionSecurity security) {
        this.security = security;
        return this;
    }
}