package openapisdk.models.operations;



public class ListTrunkingCountryRequest {
    public String serverURL;
    public ListTrunkingCountryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListTrunkingCountryQueryParams queryParams;
    public ListTrunkingCountryRequest withQueryParams(ListTrunkingCountryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTrunkingCountrySecurity security;
    public ListTrunkingCountryRequest withSecurity(ListTrunkingCountrySecurity security) {
        this.security = security;
        return this;
    }
}