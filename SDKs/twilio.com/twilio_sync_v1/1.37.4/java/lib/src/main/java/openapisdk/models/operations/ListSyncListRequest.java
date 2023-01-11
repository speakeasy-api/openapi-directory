package openapisdk.models.operations;



public class ListSyncListRequest {
    public String serverURL;
    public ListSyncListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSyncListPathParams pathParams;
    public ListSyncListRequest withPathParams(ListSyncListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSyncListQueryParams queryParams;
    public ListSyncListRequest withQueryParams(ListSyncListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSyncListSecurity security;
    public ListSyncListRequest withSecurity(ListSyncListSecurity security) {
        this.security = security;
        return this;
    }
}