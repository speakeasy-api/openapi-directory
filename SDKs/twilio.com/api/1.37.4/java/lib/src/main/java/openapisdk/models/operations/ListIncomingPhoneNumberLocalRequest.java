package openapisdk.models.operations;



public class ListIncomingPhoneNumberLocalRequest {
    public String serverURL;
    public ListIncomingPhoneNumberLocalRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListIncomingPhoneNumberLocalPathParams pathParams;
    public ListIncomingPhoneNumberLocalRequest withPathParams(ListIncomingPhoneNumberLocalPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListIncomingPhoneNumberLocalQueryParams queryParams;
    public ListIncomingPhoneNumberLocalRequest withQueryParams(ListIncomingPhoneNumberLocalQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListIncomingPhoneNumberLocalSecurity security;
    public ListIncomingPhoneNumberLocalRequest withSecurity(ListIncomingPhoneNumberLocalSecurity security) {
        this.security = security;
        return this;
    }
}