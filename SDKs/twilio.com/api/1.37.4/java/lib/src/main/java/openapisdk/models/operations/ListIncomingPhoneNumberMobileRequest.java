package openapisdk.models.operations;



public class ListIncomingPhoneNumberMobileRequest {
    public String serverURL;
    public ListIncomingPhoneNumberMobileRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListIncomingPhoneNumberMobilePathParams pathParams;
    public ListIncomingPhoneNumberMobileRequest withPathParams(ListIncomingPhoneNumberMobilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListIncomingPhoneNumberMobileQueryParams queryParams;
    public ListIncomingPhoneNumberMobileRequest withQueryParams(ListIncomingPhoneNumberMobileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListIncomingPhoneNumberMobileSecurity security;
    public ListIncomingPhoneNumberMobileRequest withSecurity(ListIncomingPhoneNumberMobileSecurity security) {
        this.security = security;
        return this;
    }
}