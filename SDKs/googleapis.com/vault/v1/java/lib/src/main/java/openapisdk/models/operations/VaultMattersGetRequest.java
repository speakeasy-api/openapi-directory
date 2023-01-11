package openapisdk.models.operations;



public class VaultMattersGetRequest {
    public VaultMattersGetPathParams pathParams;
    public VaultMattersGetRequest withPathParams(VaultMattersGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersGetQueryParams queryParams;
    public VaultMattersGetRequest withQueryParams(VaultMattersGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public VaultMattersGetSecurity security;
    public VaultMattersGetRequest withSecurity(VaultMattersGetSecurity security) {
        this.security = security;
        return this;
    }
}