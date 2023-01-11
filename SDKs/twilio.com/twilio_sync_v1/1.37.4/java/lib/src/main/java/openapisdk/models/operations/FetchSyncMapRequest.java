package openapisdk.models.operations;



public class FetchSyncMapRequest {
    public String serverURL;
    public FetchSyncMapRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSyncMapPathParams pathParams;
    public FetchSyncMapRequest withPathParams(FetchSyncMapPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSyncMapSecurity security;
    public FetchSyncMapRequest withSecurity(FetchSyncMapSecurity security) {
        this.security = security;
        return this;
    }
}