package openapisdk.models.operations;



public class ListCallEventRequest {
    public String serverURL;
    public ListCallEventRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListCallEventPathParams pathParams;
    public ListCallEventRequest withPathParams(ListCallEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListCallEventQueryParams queryParams;
    public ListCallEventRequest withQueryParams(ListCallEventQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCallEventSecurity security;
    public ListCallEventRequest withSecurity(ListCallEventSecurity security) {
        this.security = security;
        return this;
    }
}