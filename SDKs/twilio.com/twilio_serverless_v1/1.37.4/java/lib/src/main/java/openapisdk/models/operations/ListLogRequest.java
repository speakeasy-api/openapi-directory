package openapisdk.models.operations;



public class ListLogRequest {
    public String serverURL;
    public ListLogRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListLogPathParams pathParams;
    public ListLogRequest withPathParams(ListLogPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListLogQueryParams queryParams;
    public ListLogRequest withQueryParams(ListLogQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListLogSecurity security;
    public ListLogRequest withSecurity(ListLogSecurity security) {
        this.security = security;
        return this;
    }
}