package openapisdk.models.operations;



public class ListEventTypeRequest {
    public String serverURL;
    public ListEventTypeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListEventTypeQueryParams queryParams;
    public ListEventTypeRequest withQueryParams(ListEventTypeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEventTypeSecurity security;
    public ListEventTypeRequest withSecurity(ListEventTypeSecurity security) {
        this.security = security;
        return this;
    }
}