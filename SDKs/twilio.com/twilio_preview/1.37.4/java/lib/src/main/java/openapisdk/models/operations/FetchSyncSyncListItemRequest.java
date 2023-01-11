package openapisdk.models.operations;



public class FetchSyncSyncListItemRequest {
    public String serverURL;
    public FetchSyncSyncListItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSyncSyncListItemPathParams pathParams;
    public FetchSyncSyncListItemRequest withPathParams(FetchSyncSyncListItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSyncSyncListItemSecurity security;
    public FetchSyncSyncListItemRequest withSecurity(FetchSyncSyncListItemSecurity security) {
        this.security = security;
        return this;
    }
}