package openapisdk.models.operations;



public class FetchWorkerChannelRequest {
    public String serverURL;
    public FetchWorkerChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWorkerChannelPathParams pathParams;
    public FetchWorkerChannelRequest withPathParams(FetchWorkerChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWorkerChannelSecurity security;
    public FetchWorkerChannelRequest withSecurity(FetchWorkerChannelSecurity security) {
        this.security = security;
        return this;
    }
}