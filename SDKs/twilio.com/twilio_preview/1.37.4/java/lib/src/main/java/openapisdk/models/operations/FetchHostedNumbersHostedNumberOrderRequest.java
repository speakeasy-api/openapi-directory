package openapisdk.models.operations;



public class FetchHostedNumbersHostedNumberOrderRequest {
    public String serverURL;
    public FetchHostedNumbersHostedNumberOrderRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchHostedNumbersHostedNumberOrderPathParams pathParams;
    public FetchHostedNumbersHostedNumberOrderRequest withPathParams(FetchHostedNumbersHostedNumberOrderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchHostedNumbersHostedNumberOrderSecurity security;
    public FetchHostedNumbersHostedNumberOrderRequest withSecurity(FetchHostedNumbersHostedNumberOrderSecurity security) {
        this.security = security;
        return this;
    }
}