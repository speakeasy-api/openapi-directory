package openapisdk.models.operations;



public class ManufacturersAccountsProductsListRequest {
    public ManufacturersAccountsProductsListPathParams pathParams;
    public ManufacturersAccountsProductsListRequest withPathParams(ManufacturersAccountsProductsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ManufacturersAccountsProductsListQueryParams queryParams;
    public ManufacturersAccountsProductsListRequest withQueryParams(ManufacturersAccountsProductsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ManufacturersAccountsProductsListSecurity security;
    public ManufacturersAccountsProductsListRequest withSecurity(ManufacturersAccountsProductsListSecurity security) {
        this.security = security;
        return this;
    }
}