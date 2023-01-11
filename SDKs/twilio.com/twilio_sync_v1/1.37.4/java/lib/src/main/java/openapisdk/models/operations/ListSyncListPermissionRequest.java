package openapisdk.models.operations;



public class ListSyncListPermissionRequest {
    public String serverURL;
    public ListSyncListPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSyncListPermissionPathParams pathParams;
    public ListSyncListPermissionRequest withPathParams(ListSyncListPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSyncListPermissionQueryParams queryParams;
    public ListSyncListPermissionRequest withQueryParams(ListSyncListPermissionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSyncListPermissionSecurity security;
    public ListSyncListPermissionRequest withSecurity(ListSyncListPermissionSecurity security) {
        this.security = security;
        return this;
    }
}