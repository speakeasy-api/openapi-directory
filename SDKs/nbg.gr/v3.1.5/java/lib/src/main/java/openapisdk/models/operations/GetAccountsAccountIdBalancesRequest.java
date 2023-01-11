package openapisdk.models.operations;



public class GetAccountsAccountIdBalancesRequest {
    public GetAccountsAccountIdBalancesPathParams pathParams;
    public GetAccountsAccountIdBalancesRequest withPathParams(GetAccountsAccountIdBalancesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAccountsAccountIdBalancesHeaders headers;
    public GetAccountsAccountIdBalancesRequest withHeaders(GetAccountsAccountIdBalancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetAccountsAccountIdBalancesSecurity security;
    public GetAccountsAccountIdBalancesRequest withSecurity(GetAccountsAccountIdBalancesSecurity security) {
        this.security = security;
        return this;
    }
}