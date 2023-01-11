package openapisdk.models.operations;



public class AdexchangebuyerCreativesListDealsRequest {
    public AdexchangebuyerCreativesListDealsPathParams pathParams;
    public AdexchangebuyerCreativesListDealsRequest withPathParams(AdexchangebuyerCreativesListDealsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdexchangebuyerCreativesListDealsQueryParams queryParams;
    public AdexchangebuyerCreativesListDealsRequest withQueryParams(AdexchangebuyerCreativesListDealsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdexchangebuyerCreativesListDealsSecurity security;
    public AdexchangebuyerCreativesListDealsRequest withSecurity(AdexchangebuyerCreativesListDealsSecurity security) {
        this.security = security;
        return this;
    }
}