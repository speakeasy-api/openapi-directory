package openapisdk.models.operations;



public class ListSyncListItemRequest {
    public String serverURL;
    public ListSyncListItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSyncListItemPathParams pathParams;
    public ListSyncListItemRequest withPathParams(ListSyncListItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSyncListItemQueryParams queryParams;
    public ListSyncListItemRequest withQueryParams(ListSyncListItemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSyncListItemSecurity security;
    public ListSyncListItemRequest withSecurity(ListSyncListItemSecurity security) {
        this.security = security;
        return this;
    }
}