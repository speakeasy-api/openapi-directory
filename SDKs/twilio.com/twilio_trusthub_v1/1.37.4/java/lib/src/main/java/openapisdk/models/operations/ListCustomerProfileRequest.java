package openapisdk.models.operations;



public class ListCustomerProfileRequest {
    public String serverURL;
    public ListCustomerProfileRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListCustomerProfileQueryParams queryParams;
    public ListCustomerProfileRequest withQueryParams(ListCustomerProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCustomerProfileSecurity security;
    public ListCustomerProfileRequest withSecurity(ListCustomerProfileSecurity security) {
        this.security = security;
        return this;
    }
}