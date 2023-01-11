package openapisdk.models.operations;



public class DeleteIncomingPhoneNumberRequest {
    public String serverURL;
    public DeleteIncomingPhoneNumberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteIncomingPhoneNumberPathParams pathParams;
    public DeleteIncomingPhoneNumberRequest withPathParams(DeleteIncomingPhoneNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteIncomingPhoneNumberSecurity security;
    public DeleteIncomingPhoneNumberRequest withSecurity(DeleteIncomingPhoneNumberSecurity security) {
        this.security = security;
        return this;
    }
}