package openapisdk.models.operations;



public class VaultMattersExportsDeleteRequest {
    public VaultMattersExportsDeletePathParams pathParams;
    public VaultMattersExportsDeleteRequest withPathParams(VaultMattersExportsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersExportsDeleteQueryParams queryParams;
    public VaultMattersExportsDeleteRequest withQueryParams(VaultMattersExportsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public VaultMattersExportsDeleteSecurity security;
    public VaultMattersExportsDeleteRequest withSecurity(VaultMattersExportsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}