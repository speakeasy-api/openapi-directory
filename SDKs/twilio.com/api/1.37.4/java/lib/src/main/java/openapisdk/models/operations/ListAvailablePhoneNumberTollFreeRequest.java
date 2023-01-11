package openapisdk.models.operations;



public class ListAvailablePhoneNumberTollFreeRequest {
    public String serverURL;
    public ListAvailablePhoneNumberTollFreeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAvailablePhoneNumberTollFreePathParams pathParams;
    public ListAvailablePhoneNumberTollFreeRequest withPathParams(ListAvailablePhoneNumberTollFreePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAvailablePhoneNumberTollFreeQueryParams queryParams;
    public ListAvailablePhoneNumberTollFreeRequest withQueryParams(ListAvailablePhoneNumberTollFreeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAvailablePhoneNumberTollFreeSecurity security;
    public ListAvailablePhoneNumberTollFreeRequest withSecurity(ListAvailablePhoneNumberTollFreeSecurity security) {
        this.security = security;
        return this;
    }
}