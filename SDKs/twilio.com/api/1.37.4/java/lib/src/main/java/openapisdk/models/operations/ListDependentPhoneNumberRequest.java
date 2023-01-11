package openapisdk.models.operations;



public class ListDependentPhoneNumberRequest {
    public String serverURL;
    public ListDependentPhoneNumberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListDependentPhoneNumberPathParams pathParams;
    public ListDependentPhoneNumberRequest withPathParams(ListDependentPhoneNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDependentPhoneNumberQueryParams queryParams;
    public ListDependentPhoneNumberRequest withQueryParams(ListDependentPhoneNumberQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDependentPhoneNumberSecurity security;
    public ListDependentPhoneNumberRequest withSecurity(ListDependentPhoneNumberSecurity security) {
        this.security = security;
        return this;
    }
}