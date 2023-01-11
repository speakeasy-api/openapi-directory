package openapisdk.models.operations;



public class ListAvailablePhoneNumberCountryRequest {
    public String serverURL;
    public ListAvailablePhoneNumberCountryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAvailablePhoneNumberCountryPathParams pathParams;
    public ListAvailablePhoneNumberCountryRequest withPathParams(ListAvailablePhoneNumberCountryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAvailablePhoneNumberCountryQueryParams queryParams;
    public ListAvailablePhoneNumberCountryRequest withQueryParams(ListAvailablePhoneNumberCountryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAvailablePhoneNumberCountrySecurity security;
    public ListAvailablePhoneNumberCountryRequest withSecurity(ListAvailablePhoneNumberCountrySecurity security) {
        this.security = security;
        return this;
    }
}