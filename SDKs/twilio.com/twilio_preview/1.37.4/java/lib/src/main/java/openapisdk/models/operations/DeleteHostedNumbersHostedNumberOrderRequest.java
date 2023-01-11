package openapisdk.models.operations;



public class DeleteHostedNumbersHostedNumberOrderRequest {
    public String serverURL;
    public DeleteHostedNumbersHostedNumberOrderRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteHostedNumbersHostedNumberOrderPathParams pathParams;
    public DeleteHostedNumbersHostedNumberOrderRequest withPathParams(DeleteHostedNumbersHostedNumberOrderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteHostedNumbersHostedNumberOrderSecurity security;
    public DeleteHostedNumbersHostedNumberOrderRequest withSecurity(DeleteHostedNumbersHostedNumberOrderSecurity security) {
        this.security = security;
        return this;
    }
}