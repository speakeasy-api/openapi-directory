package openapisdk.models.operations;



public class GetAccountsAccountIdRequest {
    public GetAccountsAccountIdPathParams pathParams;
    public GetAccountsAccountIdRequest withPathParams(GetAccountsAccountIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAccountsAccountIdHeaders headers;
    public GetAccountsAccountIdRequest withHeaders(GetAccountsAccountIdHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetAccountsAccountIdSecurity security;
    public GetAccountsAccountIdRequest withSecurity(GetAccountsAccountIdSecurity security) {
        this.security = security;
        return this;
    }
}