package openapisdk.models.operations;



public class PriceOffersRequest {
    public PriceOffersPathParams pathParams;
    public PriceOffersRequest withPathParams(PriceOffersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PriceOffersQueryParams queryParams;
    public PriceOffersRequest withQueryParams(PriceOffersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PriceOffersSecurity security;
    public PriceOffersRequest withSecurity(PriceOffersSecurity security) {
        this.security = security;
        return this;
    }
}