package openapisdk.models.operations;



public class FetchBrandRegistrationsRequest {
    public String serverURL;
    public FetchBrandRegistrationsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchBrandRegistrationsPathParams pathParams;
    public FetchBrandRegistrationsRequest withPathParams(FetchBrandRegistrationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchBrandRegistrationsSecurity security;
    public FetchBrandRegistrationsRequest withSecurity(FetchBrandRegistrationsSecurity security) {
        this.security = security;
        return this;
    }
}