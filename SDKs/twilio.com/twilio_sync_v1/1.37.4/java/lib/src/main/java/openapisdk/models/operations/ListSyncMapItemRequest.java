package openapisdk.models.operations;



public class ListSyncMapItemRequest {
    public String serverURL;
    public ListSyncMapItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSyncMapItemPathParams pathParams;
    public ListSyncMapItemRequest withPathParams(ListSyncMapItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSyncMapItemQueryParams queryParams;
    public ListSyncMapItemRequest withQueryParams(ListSyncMapItemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSyncMapItemSecurity security;
    public ListSyncMapItemRequest withSecurity(ListSyncMapItemSecurity security) {
        this.security = security;
        return this;
    }
}