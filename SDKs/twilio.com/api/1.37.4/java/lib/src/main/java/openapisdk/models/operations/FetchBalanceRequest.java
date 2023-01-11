package openapisdk.models.operations;



public class FetchBalanceRequest {
    public String serverURL;
    public FetchBalanceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchBalancePathParams pathParams;
    public FetchBalanceRequest withPathParams(FetchBalancePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchBalanceSecurity security;
    public FetchBalanceRequest withSecurity(FetchBalanceSecurity security) {
        this.security = security;
        return this;
    }
}