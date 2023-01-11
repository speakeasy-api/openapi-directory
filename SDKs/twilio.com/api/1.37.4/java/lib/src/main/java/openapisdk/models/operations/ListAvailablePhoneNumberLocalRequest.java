package openapisdk.models.operations;



public class ListAvailablePhoneNumberLocalRequest {
    public String serverURL;
    public ListAvailablePhoneNumberLocalRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAvailablePhoneNumberLocalPathParams pathParams;
    public ListAvailablePhoneNumberLocalRequest withPathParams(ListAvailablePhoneNumberLocalPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAvailablePhoneNumberLocalQueryParams queryParams;
    public ListAvailablePhoneNumberLocalRequest withQueryParams(ListAvailablePhoneNumberLocalQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAvailablePhoneNumberLocalSecurity security;
    public ListAvailablePhoneNumberLocalRequest withSecurity(ListAvailablePhoneNumberLocalSecurity security) {
        this.security = security;
        return this;
    }
}