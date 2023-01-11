package openapisdk.models.operations;



public class ListMetricRequest {
    public String serverURL;
    public ListMetricRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListMetricPathParams pathParams;
    public ListMetricRequest withPathParams(ListMetricPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListMetricQueryParams queryParams;
    public ListMetricRequest withQueryParams(ListMetricQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMetricSecurity security;
    public ListMetricRequest withSecurity(ListMetricSecurity security) {
        this.security = security;
        return this;
    }
}