package openapisdk.models.operations;



public class FetchIncomingPhoneNumberAssignedAddOnRequest {
    public String serverURL;
    public FetchIncomingPhoneNumberAssignedAddOnRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchIncomingPhoneNumberAssignedAddOnPathParams pathParams;
    public FetchIncomingPhoneNumberAssignedAddOnRequest withPathParams(FetchIncomingPhoneNumberAssignedAddOnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchIncomingPhoneNumberAssignedAddOnSecurity security;
    public FetchIncomingPhoneNumberAssignedAddOnRequest withSecurity(FetchIncomingPhoneNumberAssignedAddOnSecurity security) {
        this.security = security;
        return this;
    }
}