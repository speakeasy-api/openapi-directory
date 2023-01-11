package openapisdk.models.operations;



public class FetchSyncSyncMapRequest {
    public String serverURL;
    public FetchSyncSyncMapRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSyncSyncMapPathParams pathParams;
    public FetchSyncSyncMapRequest withPathParams(FetchSyncSyncMapPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSyncSyncMapSecurity security;
    public FetchSyncSyncMapRequest withSecurity(FetchSyncSyncMapSecurity security) {
        this.security = security;
        return this;
    }
}