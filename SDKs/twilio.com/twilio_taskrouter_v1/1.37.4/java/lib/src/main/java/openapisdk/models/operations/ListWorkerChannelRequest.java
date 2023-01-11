package openapisdk.models.operations;



public class ListWorkerChannelRequest {
    public String serverURL;
    public ListWorkerChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListWorkerChannelPathParams pathParams;
    public ListWorkerChannelRequest withPathParams(ListWorkerChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListWorkerChannelQueryParams queryParams;
    public ListWorkerChannelRequest withQueryParams(ListWorkerChannelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWorkerChannelSecurity security;
    public ListWorkerChannelRequest withSecurity(ListWorkerChannelSecurity security) {
        this.security = security;
        return this;
    }
}