package openapisdk.models.operations;



public class VaultMattersHoldsListRequest {
    public VaultMattersHoldsListPathParams pathParams;
    public VaultMattersHoldsListRequest withPathParams(VaultMattersHoldsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersHoldsListQueryParams queryParams;
    public VaultMattersHoldsListRequest withQueryParams(VaultMattersHoldsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public VaultMattersHoldsListSecurity security;
    public VaultMattersHoldsListRequest withSecurity(VaultMattersHoldsListSecurity security) {
        this.security = security;
        return this;
    }
}