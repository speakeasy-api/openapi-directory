package openapisdk.models.operations;



public class FetchSyncMapItemRequest {
    public String serverURL;
    public FetchSyncMapItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSyncMapItemPathParams pathParams;
    public FetchSyncMapItemRequest withPathParams(FetchSyncMapItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSyncMapItemSecurity security;
    public FetchSyncMapItemRequest withSecurity(FetchSyncMapItemSecurity security) {
        this.security = security;
        return this;
    }
}