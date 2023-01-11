package openapisdk.models.operations;



public class DeleteSyncSyncMapRequest {
    public String serverURL;
    public DeleteSyncSyncMapRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSyncSyncMapPathParams pathParams;
    public DeleteSyncSyncMapRequest withPathParams(DeleteSyncSyncMapPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSyncSyncMapSecurity security;
    public DeleteSyncSyncMapRequest withSecurity(DeleteSyncSyncMapSecurity security) {
        this.security = security;
        return this;
    }
}