package openapisdk.models.operations;



public class ListDialingPermissionsCountryRequest {
    public String serverURL;
    public ListDialingPermissionsCountryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListDialingPermissionsCountryQueryParams queryParams;
    public ListDialingPermissionsCountryRequest withQueryParams(ListDialingPermissionsCountryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDialingPermissionsCountrySecurity security;
    public ListDialingPermissionsCountryRequest withSecurity(ListDialingPermissionsCountrySecurity security) {
        this.security = security;
        return this;
    }
}