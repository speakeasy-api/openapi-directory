package openapisdk.models.operations;



public class DeleteSyncSyncMapItemRequest {
    public String serverURL;
    public DeleteSyncSyncMapItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSyncSyncMapItemPathParams pathParams;
    public DeleteSyncSyncMapItemRequest withPathParams(DeleteSyncSyncMapItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSyncSyncMapItemHeaders headers;
    public DeleteSyncSyncMapItemRequest withHeaders(DeleteSyncSyncMapItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteSyncSyncMapItemSecurity security;
    public DeleteSyncSyncMapItemRequest withSecurity(DeleteSyncSyncMapItemSecurity security) {
        this.security = security;
        return this;
    }
}