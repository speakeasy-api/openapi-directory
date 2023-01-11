package openapisdk.models.operations;



public class ListIncomingPhoneNumberTollFreeRequest {
    public String serverURL;
    public ListIncomingPhoneNumberTollFreeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListIncomingPhoneNumberTollFreePathParams pathParams;
    public ListIncomingPhoneNumberTollFreeRequest withPathParams(ListIncomingPhoneNumberTollFreePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListIncomingPhoneNumberTollFreeQueryParams queryParams;
    public ListIncomingPhoneNumberTollFreeRequest withQueryParams(ListIncomingPhoneNumberTollFreeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListIncomingPhoneNumberTollFreeSecurity security;
    public ListIncomingPhoneNumberTollFreeRequest withSecurity(ListIncomingPhoneNumberTollFreeSecurity security) {
        this.security = security;
        return this;
    }
}