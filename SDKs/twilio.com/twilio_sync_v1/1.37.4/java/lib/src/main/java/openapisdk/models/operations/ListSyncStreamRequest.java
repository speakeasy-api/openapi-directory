package openapisdk.models.operations;



public class ListSyncStreamRequest {
    public String serverURL;
    public ListSyncStreamRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSyncStreamPathParams pathParams;
    public ListSyncStreamRequest withPathParams(ListSyncStreamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSyncStreamQueryParams queryParams;
    public ListSyncStreamRequest withQueryParams(ListSyncStreamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSyncStreamSecurity security;
    public ListSyncStreamRequest withSecurity(ListSyncStreamSecurity security) {
        this.security = security;
        return this;
    }
}