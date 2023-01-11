package openapisdk.models.operations;



public class FetchSyncServiceRequest {
    public String serverURL;
    public FetchSyncServiceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSyncServicePathParams pathParams;
    public FetchSyncServiceRequest withPathParams(FetchSyncServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSyncServiceSecurity security;
    public FetchSyncServiceRequest withSecurity(FetchSyncServiceSecurity security) {
        this.security = security;
        return this;
    }
}