package openapisdk.models.operations;



public class ListBillingPeriodRequest {
    public String serverURL;
    public ListBillingPeriodRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListBillingPeriodPathParams pathParams;
    public ListBillingPeriodRequest withPathParams(ListBillingPeriodPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListBillingPeriodQueryParams queryParams;
    public ListBillingPeriodRequest withQueryParams(ListBillingPeriodQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBillingPeriodSecurity security;
    public ListBillingPeriodRequest withSecurity(ListBillingPeriodSecurity security) {
        this.security = security;
        return this;
    }
}