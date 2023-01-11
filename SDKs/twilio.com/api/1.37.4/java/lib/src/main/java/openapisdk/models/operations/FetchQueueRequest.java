package openapisdk.models.operations;



public class FetchQueueRequest {
    public String serverURL;
    public FetchQueueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchQueuePathParams pathParams;
    public FetchQueueRequest withPathParams(FetchQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchQueueSecurity security;
    public FetchQueueRequest withSecurity(FetchQueueSecurity security) {
        this.security = security;
        return this;
    }
}