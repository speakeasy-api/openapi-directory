package openapisdk.models.operations;



public class ListSyncSyncListItemRequest {
    public String serverURL;
    public ListSyncSyncListItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSyncSyncListItemPathParams pathParams;
    public ListSyncSyncListItemRequest withPathParams(ListSyncSyncListItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSyncSyncListItemQueryParams queryParams;
    public ListSyncSyncListItemRequest withQueryParams(ListSyncSyncListItemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSyncSyncListItemSecurity security;
    public ListSyncSyncListItemRequest withSecurity(ListSyncSyncListItemSecurity security) {
        this.security = security;
        return this;
    }
}