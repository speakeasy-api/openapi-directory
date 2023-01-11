package openapisdk.models.operations;



public class VaultMattersHoldsAccountsListRequest {
    public VaultMattersHoldsAccountsListPathParams pathParams;
    public VaultMattersHoldsAccountsListRequest withPathParams(VaultMattersHoldsAccountsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersHoldsAccountsListQueryParams queryParams;
    public VaultMattersHoldsAccountsListRequest withQueryParams(VaultMattersHoldsAccountsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public VaultMattersHoldsAccountsListSecurity security;
    public VaultMattersHoldsAccountsListRequest withSecurity(VaultMattersHoldsAccountsListSecurity security) {
        this.security = security;
        return this;
    }
}