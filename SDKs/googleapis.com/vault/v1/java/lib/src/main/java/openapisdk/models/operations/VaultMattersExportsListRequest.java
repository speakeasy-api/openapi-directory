package openapisdk.models.operations;



public class VaultMattersExportsListRequest {
    public VaultMattersExportsListPathParams pathParams;
    public VaultMattersExportsListRequest withPathParams(VaultMattersExportsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersExportsListQueryParams queryParams;
    public VaultMattersExportsListRequest withQueryParams(VaultMattersExportsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public VaultMattersExportsListSecurity security;
    public VaultMattersExportsListRequest withSecurity(VaultMattersExportsListSecurity security) {
        this.security = security;
        return this;
    }
}