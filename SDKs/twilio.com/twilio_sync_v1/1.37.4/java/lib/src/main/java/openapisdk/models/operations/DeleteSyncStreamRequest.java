package openapisdk.models.operations;



public class DeleteSyncStreamRequest {
    public String serverURL;
    public DeleteSyncStreamRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSyncStreamPathParams pathParams;
    public DeleteSyncStreamRequest withPathParams(DeleteSyncStreamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSyncStreamSecurity security;
    public DeleteSyncStreamRequest withSecurity(DeleteSyncStreamSecurity security) {
        this.security = security;
        return this;
    }
}