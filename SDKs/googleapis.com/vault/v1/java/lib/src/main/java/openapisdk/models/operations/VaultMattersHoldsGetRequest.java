package openapisdk.models.operations;



public class VaultMattersHoldsGetRequest {
    public VaultMattersHoldsGetPathParams pathParams;
    public VaultMattersHoldsGetRequest withPathParams(VaultMattersHoldsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersHoldsGetQueryParams queryParams;
    public VaultMattersHoldsGetRequest withQueryParams(VaultMattersHoldsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public VaultMattersHoldsGetSecurity security;
    public VaultMattersHoldsGetRequest withSecurity(VaultMattersHoldsGetSecurity security) {
        this.security = security;
        return this;
    }
}