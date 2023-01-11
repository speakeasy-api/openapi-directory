package openapisdk.models.operations;



public class RetrievePrefixPricingRequest {
    public RetrievePrefixPricingPathParams pathParams;
    public RetrievePrefixPricingRequest withPathParams(RetrievePrefixPricingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RetrievePrefixPricingQueryParams queryParams;
    public RetrievePrefixPricingRequest withQueryParams(RetrievePrefixPricingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}