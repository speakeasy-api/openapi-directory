package openapisdk.models.operations;



public class DeleteSyncListItemRequest {
    public String serverURL;
    public DeleteSyncListItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSyncListItemPathParams pathParams;
    public DeleteSyncListItemRequest withPathParams(DeleteSyncListItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSyncListItemHeaders headers;
    public DeleteSyncListItemRequest withHeaders(DeleteSyncListItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteSyncListItemSecurity security;
    public DeleteSyncListItemRequest withSecurity(DeleteSyncListItemSecurity security) {
        this.security = security;
        return this;
    }
}