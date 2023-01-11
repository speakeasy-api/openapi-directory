package openapisdk.models.operations;



public class FetchPhoneNumberCountryRequest {
    public String serverURL;
    public FetchPhoneNumberCountryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchPhoneNumberCountryPathParams pathParams;
    public FetchPhoneNumberCountryRequest withPathParams(FetchPhoneNumberCountryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchPhoneNumberCountrySecurity security;
    public FetchPhoneNumberCountryRequest withSecurity(FetchPhoneNumberCountrySecurity security) {
        this.security = security;
        return this;
    }
}