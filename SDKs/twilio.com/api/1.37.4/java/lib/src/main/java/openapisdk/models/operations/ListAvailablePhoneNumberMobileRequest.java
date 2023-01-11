package openapisdk.models.operations;



public class ListAvailablePhoneNumberMobileRequest {
    public String serverURL;
    public ListAvailablePhoneNumberMobileRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAvailablePhoneNumberMobilePathParams pathParams;
    public ListAvailablePhoneNumberMobileRequest withPathParams(ListAvailablePhoneNumberMobilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAvailablePhoneNumberMobileQueryParams queryParams;
    public ListAvailablePhoneNumberMobileRequest withQueryParams(ListAvailablePhoneNumberMobileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAvailablePhoneNumberMobileSecurity security;
    public ListAvailablePhoneNumberMobileRequest withSecurity(ListAvailablePhoneNumberMobileSecurity security) {
        this.security = security;
        return this;
    }
}