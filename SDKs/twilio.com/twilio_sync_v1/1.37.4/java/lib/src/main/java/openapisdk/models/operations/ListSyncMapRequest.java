package openapisdk.models.operations;



public class ListSyncMapRequest {
    public String serverURL;
    public ListSyncMapRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSyncMapPathParams pathParams;
    public ListSyncMapRequest withPathParams(ListSyncMapPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSyncMapQueryParams queryParams;
    public ListSyncMapRequest withQueryParams(ListSyncMapQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSyncMapSecurity security;
    public ListSyncMapRequest withSecurity(ListSyncMapSecurity security) {
        this.security = security;
        return this;
    }
}