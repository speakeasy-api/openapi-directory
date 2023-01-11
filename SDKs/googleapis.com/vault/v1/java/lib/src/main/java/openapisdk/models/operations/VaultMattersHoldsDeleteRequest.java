package openapisdk.models.operations;



public class VaultMattersHoldsDeleteRequest {
    public VaultMattersHoldsDeletePathParams pathParams;
    public VaultMattersHoldsDeleteRequest withPathParams(VaultMattersHoldsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersHoldsDeleteQueryParams queryParams;
    public VaultMattersHoldsDeleteRequest withQueryParams(VaultMattersHoldsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public VaultMattersHoldsDeleteSecurity security;
    public VaultMattersHoldsDeleteRequest withSecurity(VaultMattersHoldsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}