package openapisdk.models.operations;



public class FetchSyncSyncMapItemRequest {
    public String serverURL;
    public FetchSyncSyncMapItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSyncSyncMapItemPathParams pathParams;
    public FetchSyncSyncMapItemRequest withPathParams(FetchSyncSyncMapItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSyncSyncMapItemSecurity security;
    public FetchSyncSyncMapItemRequest withSecurity(FetchSyncSyncMapItemSecurity security) {
        this.security = security;
        return this;
    }
}