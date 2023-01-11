package openapisdk.models.operations;



public class VaultMattersDeleteRequest {
    public VaultMattersDeletePathParams pathParams;
    public VaultMattersDeleteRequest withPathParams(VaultMattersDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersDeleteQueryParams queryParams;
    public VaultMattersDeleteRequest withQueryParams(VaultMattersDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public VaultMattersDeleteSecurity security;
    public VaultMattersDeleteRequest withSecurity(VaultMattersDeleteSecurity security) {
        this.security = security;
        return this;
    }
}