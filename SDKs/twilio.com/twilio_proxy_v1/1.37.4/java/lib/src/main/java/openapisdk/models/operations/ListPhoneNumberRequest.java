package openapisdk.models.operations;



public class ListPhoneNumberRequest {
    public String serverURL;
    public ListPhoneNumberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListPhoneNumberPathParams pathParams;
    public ListPhoneNumberRequest withPathParams(ListPhoneNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListPhoneNumberQueryParams queryParams;
    public ListPhoneNumberRequest withQueryParams(ListPhoneNumberQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPhoneNumberSecurity security;
    public ListPhoneNumberRequest withSecurity(ListPhoneNumberSecurity security) {
        this.security = security;
        return this;
    }
}