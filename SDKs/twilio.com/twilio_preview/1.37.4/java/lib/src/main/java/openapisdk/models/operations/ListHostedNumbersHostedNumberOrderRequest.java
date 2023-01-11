package openapisdk.models.operations;



public class ListHostedNumbersHostedNumberOrderRequest {
    public String serverURL;
    public ListHostedNumbersHostedNumberOrderRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListHostedNumbersHostedNumberOrderQueryParams queryParams;
    public ListHostedNumbersHostedNumberOrderRequest withQueryParams(ListHostedNumbersHostedNumberOrderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListHostedNumbersHostedNumberOrderSecurity security;
    public ListHostedNumbersHostedNumberOrderRequest withSecurity(ListHostedNumbersHostedNumberOrderSecurity security) {
        this.security = security;
        return this;
    }
}