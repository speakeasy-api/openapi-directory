package openapisdk.models.operations;



public class FetchSyncListItemRequest {
    public String serverURL;
    public FetchSyncListItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSyncListItemPathParams pathParams;
    public FetchSyncListItemRequest withPathParams(FetchSyncListItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSyncListItemSecurity security;
    public FetchSyncListItemRequest withSecurity(FetchSyncListItemSecurity security) {
        this.security = security;
        return this;
    }
}