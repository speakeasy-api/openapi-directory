package openapisdk.models.operations;



public class GetCountryRequest {
    public GetCountryPathParams pathParams;
    public GetCountryRequest withPathParams(GetCountryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCountryQueryParams queryParams;
    public GetCountryRequest withQueryParams(GetCountryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}