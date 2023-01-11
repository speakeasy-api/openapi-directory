package openapisdk.models.operations;



public class FetchVoiceCountryRequest {
    public String serverURL;
    public FetchVoiceCountryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchVoiceCountryPathParams pathParams;
    public FetchVoiceCountryRequest withPathParams(FetchVoiceCountryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchVoiceCountrySecurity security;
    public FetchVoiceCountryRequest withSecurity(FetchVoiceCountrySecurity security) {
        this.security = security;
        return this;
    }
}