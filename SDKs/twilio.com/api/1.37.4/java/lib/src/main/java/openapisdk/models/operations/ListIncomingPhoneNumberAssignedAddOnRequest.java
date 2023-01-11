package openapisdk.models.operations;



public class ListIncomingPhoneNumberAssignedAddOnRequest {
    public String serverURL;
    public ListIncomingPhoneNumberAssignedAddOnRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListIncomingPhoneNumberAssignedAddOnPathParams pathParams;
    public ListIncomingPhoneNumberAssignedAddOnRequest withPathParams(ListIncomingPhoneNumberAssignedAddOnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListIncomingPhoneNumberAssignedAddOnQueryParams queryParams;
    public ListIncomingPhoneNumberAssignedAddOnRequest withQueryParams(ListIncomingPhoneNumberAssignedAddOnQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListIncomingPhoneNumberAssignedAddOnSecurity security;
    public ListIncomingPhoneNumberAssignedAddOnRequest withSecurity(ListIncomingPhoneNumberAssignedAddOnSecurity security) {
        this.security = security;
        return this;
    }
}