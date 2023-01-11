package openapisdk.models.operations;



public class DeletePhoneNumberRequest {
    public String serverURL;
    public DeletePhoneNumberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeletePhoneNumberPathParams pathParams;
    public DeletePhoneNumberRequest withPathParams(DeletePhoneNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeletePhoneNumberSecurity security;
    public DeletePhoneNumberRequest withSecurity(DeletePhoneNumberSecurity security) {
        this.security = security;
        return this;
    }
}