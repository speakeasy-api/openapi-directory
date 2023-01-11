package openapisdk.models.operations;



public class FetchTrunkingCountryRequest {
    public String serverURL;
    public FetchTrunkingCountryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTrunkingCountryPathParams pathParams;
    public FetchTrunkingCountryRequest withPathParams(FetchTrunkingCountryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTrunkingCountrySecurity security;
    public FetchTrunkingCountryRequest withSecurity(FetchTrunkingCountrySecurity security) {
        this.security = security;
        return this;
    }
}