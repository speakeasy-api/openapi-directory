package openapisdk.models.operations;



public class DeleteSyncMapRequest {
    public String serverURL;
    public DeleteSyncMapRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSyncMapPathParams pathParams;
    public DeleteSyncMapRequest withPathParams(DeleteSyncMapPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSyncMapSecurity security;
    public DeleteSyncMapRequest withSecurity(DeleteSyncMapSecurity security) {
        this.security = security;
        return this;
    }
}