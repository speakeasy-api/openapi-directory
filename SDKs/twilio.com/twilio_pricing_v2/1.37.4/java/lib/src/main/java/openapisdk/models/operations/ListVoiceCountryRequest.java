package openapisdk.models.operations;



public class ListVoiceCountryRequest {
    public String serverURL;
    public ListVoiceCountryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListVoiceCountryQueryParams queryParams;
    public ListVoiceCountryRequest withQueryParams(ListVoiceCountryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListVoiceCountrySecurity security;
    public ListVoiceCountryRequest withSecurity(ListVoiceCountrySecurity security) {
        this.security = security;
        return this;
    }
}