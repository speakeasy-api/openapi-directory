package openapisdk.models.operations;



public class ListHostedNumbersDependentHostedNumberOrderRequest {
    public String serverURL;
    public ListHostedNumbersDependentHostedNumberOrderRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListHostedNumbersDependentHostedNumberOrderPathParams pathParams;
    public ListHostedNumbersDependentHostedNumberOrderRequest withPathParams(ListHostedNumbersDependentHostedNumberOrderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListHostedNumbersDependentHostedNumberOrderQueryParams queryParams;
    public ListHostedNumbersDependentHostedNumberOrderRequest withQueryParams(ListHostedNumbersDependentHostedNumberOrderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListHostedNumbersDependentHostedNumberOrderSecurity security;
    public ListHostedNumbersDependentHostedNumberOrderRequest withSecurity(ListHostedNumbersDependentHostedNumberOrderSecurity security) {
        this.security = security;
        return this;
    }
}