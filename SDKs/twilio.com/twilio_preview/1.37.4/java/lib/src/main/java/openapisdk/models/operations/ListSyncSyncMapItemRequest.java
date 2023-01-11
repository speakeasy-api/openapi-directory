package openapisdk.models.operations;



public class ListSyncSyncMapItemRequest {
    public String serverURL;
    public ListSyncSyncMapItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSyncSyncMapItemPathParams pathParams;
    public ListSyncSyncMapItemRequest withPathParams(ListSyncSyncMapItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSyncSyncMapItemQueryParams queryParams;
    public ListSyncSyncMapItemRequest withQueryParams(ListSyncSyncMapItemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSyncSyncMapItemSecurity security;
    public ListSyncSyncMapItemRequest withSecurity(ListSyncSyncMapItemSecurity security) {
        this.security = security;
        return this;
    }
}