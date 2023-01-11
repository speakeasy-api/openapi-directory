package openapisdk.models.operations;



public class ListSyncSyncListPermissionRequest {
    public String serverURL;
    public ListSyncSyncListPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSyncSyncListPermissionPathParams pathParams;
    public ListSyncSyncListPermissionRequest withPathParams(ListSyncSyncListPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSyncSyncListPermissionQueryParams queryParams;
    public ListSyncSyncListPermissionRequest withQueryParams(ListSyncSyncListPermissionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSyncSyncListPermissionSecurity security;
    public ListSyncSyncListPermissionRequest withSecurity(ListSyncSyncListPermissionSecurity security) {
        this.security = security;
        return this;
    }
}