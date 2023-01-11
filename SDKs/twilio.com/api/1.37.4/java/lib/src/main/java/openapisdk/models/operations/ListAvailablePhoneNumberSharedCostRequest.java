package openapisdk.models.operations;



public class ListAvailablePhoneNumberSharedCostRequest {
    public String serverURL;
    public ListAvailablePhoneNumberSharedCostRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAvailablePhoneNumberSharedCostPathParams pathParams;
    public ListAvailablePhoneNumberSharedCostRequest withPathParams(ListAvailablePhoneNumberSharedCostPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAvailablePhoneNumberSharedCostQueryParams queryParams;
    public ListAvailablePhoneNumberSharedCostRequest withQueryParams(ListAvailablePhoneNumberSharedCostQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAvailablePhoneNumberSharedCostSecurity security;
    public ListAvailablePhoneNumberSharedCostRequest withSecurity(ListAvailablePhoneNumberSharedCostSecurity security) {
        this.security = security;
        return this;
    }
}