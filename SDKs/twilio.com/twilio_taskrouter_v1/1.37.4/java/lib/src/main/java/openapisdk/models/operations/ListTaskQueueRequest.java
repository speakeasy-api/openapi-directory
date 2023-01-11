package openapisdk.models.operations;



public class ListTaskQueueRequest {
    public String serverURL;
    public ListTaskQueueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListTaskQueuePathParams pathParams;
    public ListTaskQueueRequest withPathParams(ListTaskQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListTaskQueueQueryParams queryParams;
    public ListTaskQueueRequest withQueryParams(ListTaskQueueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTaskQueueSecurity security;
    public ListTaskQueueRequest withSecurity(ListTaskQueueSecurity security) {
        this.security = security;
        return this;
    }
}