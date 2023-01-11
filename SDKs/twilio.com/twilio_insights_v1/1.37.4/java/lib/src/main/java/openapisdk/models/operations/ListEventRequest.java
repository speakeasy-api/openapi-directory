package openapisdk.models.operations;



public class ListEventRequest {
    public String serverURL;
    public ListEventRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListEventPathParams pathParams;
    public ListEventRequest withPathParams(ListEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListEventQueryParams queryParams;
    public ListEventRequest withQueryParams(ListEventQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEventSecurity security;
    public ListEventRequest withSecurity(ListEventSecurity security) {
        this.security = security;
        return this;
    }
}