package openapisdk.models.operations;



public class CountryRequest {
    public CountryPathParams pathParams;
    public CountryRequest withPathParams(CountryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CountrySecurity security;
    public CountryRequest withSecurity(CountrySecurity security) {
        this.security = security;
        return this;
    }
}