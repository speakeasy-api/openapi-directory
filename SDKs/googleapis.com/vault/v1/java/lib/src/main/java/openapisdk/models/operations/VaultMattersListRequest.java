package openapisdk.models.operations;



public class VaultMattersListRequest {
    public VaultMattersListQueryParams queryParams;
    public VaultMattersListRequest withQueryParams(VaultMattersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public VaultMattersListSecurity security;
    public VaultMattersListRequest withSecurity(VaultMattersListSecurity security) {
        this.security = security;
        return this;
    }
}