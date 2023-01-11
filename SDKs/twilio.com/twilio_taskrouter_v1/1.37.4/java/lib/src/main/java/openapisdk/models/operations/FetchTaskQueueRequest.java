package openapisdk.models.operations;



public class FetchTaskQueueRequest {
    public String serverURL;
    public FetchTaskQueueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTaskQueuePathParams pathParams;
    public FetchTaskQueueRequest withPathParams(FetchTaskQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTaskQueueSecurity security;
    public FetchTaskQueueRequest withSecurity(FetchTaskQueueSecurity security) {
        this.security = security;
        return this;
    }
}