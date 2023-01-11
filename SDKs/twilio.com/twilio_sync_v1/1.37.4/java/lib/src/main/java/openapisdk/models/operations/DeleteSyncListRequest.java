package openapisdk.models.operations;



public class DeleteSyncListRequest {
    public String serverURL;
    public DeleteSyncListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSyncListPathParams pathParams;
    public DeleteSyncListRequest withPathParams(DeleteSyncListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSyncListSecurity security;
    public DeleteSyncListRequest withSecurity(DeleteSyncListSecurity security) {
        this.security = security;
        return this;
    }
}