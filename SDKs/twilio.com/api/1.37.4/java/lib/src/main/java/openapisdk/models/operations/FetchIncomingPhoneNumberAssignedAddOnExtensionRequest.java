package openapisdk.models.operations;



public class FetchIncomingPhoneNumberAssignedAddOnExtensionRequest {
    public String serverURL;
    public FetchIncomingPhoneNumberAssignedAddOnExtensionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams pathParams;
    public FetchIncomingPhoneNumberAssignedAddOnExtensionRequest withPathParams(FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity security;
    public FetchIncomingPhoneNumberAssignedAddOnExtensionRequest withSecurity(FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity security) {
        this.security = security;
        return this;
    }
}