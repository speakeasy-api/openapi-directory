package openapisdk.models.operations;



public class VaultMattersHoldsAccountsDeleteRequest {
    public VaultMattersHoldsAccountsDeletePathParams pathParams;
    public VaultMattersHoldsAccountsDeleteRequest withPathParams(VaultMattersHoldsAccountsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersHoldsAccountsDeleteQueryParams queryParams;
    public VaultMattersHoldsAccountsDeleteRequest withQueryParams(VaultMattersHoldsAccountsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public VaultMattersHoldsAccountsDeleteSecurity security;
    public VaultMattersHoldsAccountsDeleteRequest withSecurity(VaultMattersHoldsAccountsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}