package openapisdk.models.operations;



public class DeleteSyncMapItemRequest {
    public String serverURL;
    public DeleteSyncMapItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSyncMapItemPathParams pathParams;
    public DeleteSyncMapItemRequest withPathParams(DeleteSyncMapItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSyncMapItemHeaders headers;
    public DeleteSyncMapItemRequest withHeaders(DeleteSyncMapItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteSyncMapItemSecurity security;
    public DeleteSyncMapItemRequest withSecurity(DeleteSyncMapItemSecurity security) {
        this.security = security;
        return this;
    }
}