package openapisdk.models.operations;



public class ListBrandRegistrationsRequest {
    public String serverURL;
    public ListBrandRegistrationsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListBrandRegistrationsQueryParams queryParams;
    public ListBrandRegistrationsRequest withQueryParams(ListBrandRegistrationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBrandRegistrationsSecurity security;
    public ListBrandRegistrationsRequest withSecurity(ListBrandRegistrationsSecurity security) {
        this.security = security;
        return this;
    }
}