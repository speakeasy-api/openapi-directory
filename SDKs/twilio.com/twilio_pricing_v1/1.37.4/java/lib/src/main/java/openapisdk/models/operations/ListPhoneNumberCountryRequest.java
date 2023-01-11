package openapisdk.models.operations;



public class ListPhoneNumberCountryRequest {
    public String serverURL;
    public ListPhoneNumberCountryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListPhoneNumberCountryQueryParams queryParams;
    public ListPhoneNumberCountryRequest withQueryParams(ListPhoneNumberCountryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPhoneNumberCountrySecurity security;
    public ListPhoneNumberCountryRequest withSecurity(ListPhoneNumberCountrySecurity security) {
        this.security = security;
        return this;
    }
}