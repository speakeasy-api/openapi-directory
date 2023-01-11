package openapisdk.models.operations;



public class FetchIncomingPhoneNumberRequest {
    public String serverURL;
    public FetchIncomingPhoneNumberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchIncomingPhoneNumberPathParams pathParams;
    public FetchIncomingPhoneNumberRequest withPathParams(FetchIncomingPhoneNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchIncomingPhoneNumberSecurity security;
    public FetchIncomingPhoneNumberRequest withSecurity(FetchIncomingPhoneNumberSecurity security) {
        this.security = security;
        return this;
    }
}