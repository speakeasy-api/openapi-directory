package openapisdk.models.operations;



public class FetchPhoneNumberRequest {
    public String serverURL;
    public FetchPhoneNumberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchPhoneNumberPathParams pathParams;
    public FetchPhoneNumberRequest withPathParams(FetchPhoneNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchPhoneNumberSecurity security;
    public FetchPhoneNumberRequest withSecurity(FetchPhoneNumberSecurity security) {
        this.security = security;
        return this;
    }
}