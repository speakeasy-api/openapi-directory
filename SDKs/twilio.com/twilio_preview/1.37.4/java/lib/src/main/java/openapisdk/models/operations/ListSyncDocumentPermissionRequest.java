package openapisdk.models.operations;



public class ListSyncDocumentPermissionRequest {
    public String serverURL;
    public ListSyncDocumentPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSyncDocumentPermissionPathParams pathParams;
    public ListSyncDocumentPermissionRequest withPathParams(ListSyncDocumentPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSyncDocumentPermissionQueryParams queryParams;
    public ListSyncDocumentPermissionRequest withQueryParams(ListSyncDocumentPermissionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSyncDocumentPermissionSecurity security;
    public ListSyncDocumentPermissionRequest withSecurity(ListSyncDocumentPermissionSecurity security) {
        this.security = security;
        return this;
    }
}