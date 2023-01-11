package openapisdk.models.operations;



public class GetAccountsAccountIdTransactionsRequest {
    public GetAccountsAccountIdTransactionsPathParams pathParams;
    public GetAccountsAccountIdTransactionsRequest withPathParams(GetAccountsAccountIdTransactionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAccountsAccountIdTransactionsQueryParams queryParams;
    public GetAccountsAccountIdTransactionsRequest withQueryParams(GetAccountsAccountIdTransactionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAccountsAccountIdTransactionsHeaders headers;
    public GetAccountsAccountIdTransactionsRequest withHeaders(GetAccountsAccountIdTransactionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetAccountsAccountIdTransactionsSecurity security;
    public GetAccountsAccountIdTransactionsRequest withSecurity(GetAccountsAccountIdTransactionsSecurity security) {
        this.security = security;
        return this;
    }
}