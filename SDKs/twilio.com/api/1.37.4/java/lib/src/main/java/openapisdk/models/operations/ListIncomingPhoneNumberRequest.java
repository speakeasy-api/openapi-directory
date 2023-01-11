package openapisdk.models.operations;



public class ListIncomingPhoneNumberRequest {
    public String serverURL;
    public ListIncomingPhoneNumberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListIncomingPhoneNumberPathParams pathParams;
    public ListIncomingPhoneNumberRequest withPathParams(ListIncomingPhoneNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListIncomingPhoneNumberQueryParams queryParams;
    public ListIncomingPhoneNumberRequest withQueryParams(ListIncomingPhoneNumberQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListIncomingPhoneNumberSecurity security;
    public ListIncomingPhoneNumberRequest withSecurity(ListIncomingPhoneNumberSecurity security) {
        this.security = security;
        return this;
    }
}