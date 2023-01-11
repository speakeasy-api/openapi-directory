package openapisdk.models.operations;



public class DeleteIncomingPhoneNumberAssignedAddOnRequest {
    public String serverURL;
    public DeleteIncomingPhoneNumberAssignedAddOnRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteIncomingPhoneNumberAssignedAddOnPathParams pathParams;
    public DeleteIncomingPhoneNumberAssignedAddOnRequest withPathParams(DeleteIncomingPhoneNumberAssignedAddOnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteIncomingPhoneNumberAssignedAddOnSecurity security;
    public DeleteIncomingPhoneNumberAssignedAddOnRequest withSecurity(DeleteIncomingPhoneNumberAssignedAddOnSecurity security) {
        this.security = security;
        return this;
    }
}