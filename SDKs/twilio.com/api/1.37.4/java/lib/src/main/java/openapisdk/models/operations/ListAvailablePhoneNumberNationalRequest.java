package openapisdk.models.operations;



public class ListAvailablePhoneNumberNationalRequest {
    public String serverURL;
    public ListAvailablePhoneNumberNationalRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAvailablePhoneNumberNationalPathParams pathParams;
    public ListAvailablePhoneNumberNationalRequest withPathParams(ListAvailablePhoneNumberNationalPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAvailablePhoneNumberNationalQueryParams queryParams;
    public ListAvailablePhoneNumberNationalRequest withQueryParams(ListAvailablePhoneNumberNationalQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAvailablePhoneNumberNationalSecurity security;
    public ListAvailablePhoneNumberNationalRequest withSecurity(ListAvailablePhoneNumberNationalSecurity security) {
        this.security = security;
        return this;
    }
}