package openapisdk.models.operations;



public class FetchDialingPermissionsCountryRequest {
    public String serverURL;
    public FetchDialingPermissionsCountryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchDialingPermissionsCountryPathParams pathParams;
    public FetchDialingPermissionsCountryRequest withPathParams(FetchDialingPermissionsCountryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchDialingPermissionsCountrySecurity security;
    public FetchDialingPermissionsCountryRequest withSecurity(FetchDialingPermissionsCountrySecurity security) {
        this.security = security;
        return this;
    }
}