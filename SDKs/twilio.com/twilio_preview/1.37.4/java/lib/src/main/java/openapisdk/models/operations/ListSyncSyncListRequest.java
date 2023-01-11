package openapisdk.models.operations;



public class ListSyncSyncListRequest {
    public String serverURL;
    public ListSyncSyncListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSyncSyncListPathParams pathParams;
    public ListSyncSyncListRequest withPathParams(ListSyncSyncListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSyncSyncListQueryParams queryParams;
    public ListSyncSyncListRequest withQueryParams(ListSyncSyncListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSyncSyncListSecurity security;
    public ListSyncSyncListRequest withSecurity(ListSyncSyncListSecurity security) {
        this.security = security;
        return this;
    }
}