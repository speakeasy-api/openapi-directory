package openapisdk.models.operations;



public class ListIncomingPhoneNumberAssignedAddOnExtensionRequest {
    public String serverURL;
    public ListIncomingPhoneNumberAssignedAddOnExtensionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListIncomingPhoneNumberAssignedAddOnExtensionPathParams pathParams;
    public ListIncomingPhoneNumberAssignedAddOnExtensionRequest withPathParams(ListIncomingPhoneNumberAssignedAddOnExtensionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams queryParams;
    public ListIncomingPhoneNumberAssignedAddOnExtensionRequest withQueryParams(ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListIncomingPhoneNumberAssignedAddOnExtensionSecurity security;
    public ListIncomingPhoneNumberAssignedAddOnExtensionRequest withSecurity(ListIncomingPhoneNumberAssignedAddOnExtensionSecurity security) {
        this.security = security;
        return this;
    }
}