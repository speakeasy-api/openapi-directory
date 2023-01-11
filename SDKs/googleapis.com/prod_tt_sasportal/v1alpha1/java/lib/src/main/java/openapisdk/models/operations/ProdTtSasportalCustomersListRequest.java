package openapisdk.models.operations;



public class ProdTtSasportalCustomersListRequest {
    public ProdTtSasportalCustomersListQueryParams queryParams;
    public ProdTtSasportalCustomersListRequest withQueryParams(ProdTtSasportalCustomersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ProdTtSasportalCustomersListSecurity security;
    public ProdTtSasportalCustomersListRequest withSecurity(ProdTtSasportalCustomersListSecurity security) {
        this.security = security;
        return this;
    }
}