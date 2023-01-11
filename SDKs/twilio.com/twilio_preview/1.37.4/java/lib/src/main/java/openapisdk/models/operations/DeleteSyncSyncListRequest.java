package openapisdk.models.operations;



public class DeleteSyncSyncListRequest {
    public String serverURL;
    public DeleteSyncSyncListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSyncSyncListPathParams pathParams;
    public DeleteSyncSyncListRequest withPathParams(DeleteSyncSyncListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSyncSyncListSecurity security;
    public DeleteSyncSyncListRequest withSecurity(DeleteSyncSyncListSecurity security) {
        this.security = security;
        return this;
    }
}