package openapisdk.models.operations;



public class ListSubscribedEventRequest {
    public String serverURL;
    public ListSubscribedEventRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSubscribedEventPathParams pathParams;
    public ListSubscribedEventRequest withPathParams(ListSubscribedEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSubscribedEventQueryParams queryParams;
    public ListSubscribedEventRequest withQueryParams(ListSubscribedEventQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSubscribedEventSecurity security;
    public ListSubscribedEventRequest withSecurity(ListSubscribedEventSecurity security) {
        this.security = security;
        return this;
    }
}