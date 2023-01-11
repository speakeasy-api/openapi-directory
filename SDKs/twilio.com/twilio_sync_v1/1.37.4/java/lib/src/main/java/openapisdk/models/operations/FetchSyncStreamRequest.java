package openapisdk.models.operations;



public class FetchSyncStreamRequest {
    public String serverURL;
    public FetchSyncStreamRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSyncStreamPathParams pathParams;
    public FetchSyncStreamRequest withPathParams(FetchSyncStreamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSyncStreamSecurity security;
    public FetchSyncStreamRequest withSecurity(FetchSyncStreamSecurity security) {
        this.security = security;
        return this;
    }
}