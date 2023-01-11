package openapisdk.models.operations;



public class ListSyncSyncMapRequest {
    public String serverURL;
    public ListSyncSyncMapRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSyncSyncMapPathParams pathParams;
    public ListSyncSyncMapRequest withPathParams(ListSyncSyncMapPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSyncSyncMapQueryParams queryParams;
    public ListSyncSyncMapRequest withQueryParams(ListSyncSyncMapQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSyncSyncMapSecurity security;
    public ListSyncSyncMapRequest withSecurity(ListSyncSyncMapSecurity security) {
        this.security = security;
        return this;
    }
}