package openapisdk.models.operations;



public class ListQueueRequest {
    public String serverURL;
    public ListQueueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListQueuePathParams pathParams;
    public ListQueueRequest withPathParams(ListQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListQueueQueryParams queryParams;
    public ListQueueRequest withQueryParams(ListQueueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListQueueSecurity security;
    public ListQueueRequest withSecurity(ListQueueSecurity security) {
        this.security = security;
        return this;
    }
}