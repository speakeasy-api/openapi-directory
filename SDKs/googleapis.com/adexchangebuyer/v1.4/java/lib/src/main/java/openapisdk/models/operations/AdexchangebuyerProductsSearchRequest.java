package openapisdk.models.operations;



public class AdexchangebuyerProductsSearchRequest {
    public AdexchangebuyerProductsSearchQueryParams queryParams;
    public AdexchangebuyerProductsSearchRequest withQueryParams(AdexchangebuyerProductsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdexchangebuyerProductsSearchSecurity security;
    public AdexchangebuyerProductsSearchRequest withSecurity(AdexchangebuyerProductsSearchSecurity security) {
        this.security = security;
        return this;
    }
}