package openapisdk.models.operations;



public class ListAvailablePhoneNumberVoipRequest {
    public String serverURL;
    public ListAvailablePhoneNumberVoipRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAvailablePhoneNumberVoipPathParams pathParams;
    public ListAvailablePhoneNumberVoipRequest withPathParams(ListAvailablePhoneNumberVoipPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAvailablePhoneNumberVoipQueryParams queryParams;
    public ListAvailablePhoneNumberVoipRequest withQueryParams(ListAvailablePhoneNumberVoipQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAvailablePhoneNumberVoipSecurity security;
    public ListAvailablePhoneNumberVoipRequest withSecurity(ListAvailablePhoneNumberVoipSecurity security) {
        this.security = security;
        return this;
    }
}