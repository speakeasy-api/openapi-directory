package openapisdk.models.operations;



public class ListDayRequest {
    public String serverURL;
    public ListDayRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListDayPathParams pathParams;
    public ListDayRequest withPathParams(ListDayPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDayQueryParams queryParams;
    public ListDayRequest withQueryParams(ListDayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDaySecurity security;
    public ListDayRequest withSecurity(ListDaySecurity security) {
        this.security = security;
        return this;
    }
}