package openapisdk.models.operations;



public class DeleteSyncSyncListItemRequest {
    public String serverURL;
    public DeleteSyncSyncListItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSyncSyncListItemPathParams pathParams;
    public DeleteSyncSyncListItemRequest withPathParams(DeleteSyncSyncListItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSyncSyncListItemHeaders headers;
    public DeleteSyncSyncListItemRequest withHeaders(DeleteSyncSyncListItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteSyncSyncListItemSecurity security;
    public DeleteSyncSyncListItemRequest withSecurity(DeleteSyncSyncListItemSecurity security) {
        this.security = security;
        return this;
    }
}