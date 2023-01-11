package openapisdk.models.operations;



public class FetchAvailablePhoneNumberCountryRequest {
    public String serverURL;
    public FetchAvailablePhoneNumberCountryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchAvailablePhoneNumberCountryPathParams pathParams;
    public FetchAvailablePhoneNumberCountryRequest withPathParams(FetchAvailablePhoneNumberCountryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchAvailablePhoneNumberCountrySecurity security;
    public FetchAvailablePhoneNumberCountryRequest withSecurity(FetchAvailablePhoneNumberCountrySecurity security) {
        this.security = security;
        return this;
    }
}