package openapisdk.models.operations;



public class UpdateBrandRegistrationsRequest {
    public String serverURL;
    public UpdateBrandRegistrationsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateBrandRegistrationsPathParams pathParams;
    public UpdateBrandRegistrationsRequest withPathParams(UpdateBrandRegistrationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateBrandRegistrationsSecurity security;
    public UpdateBrandRegistrationsRequest withSecurity(UpdateBrandRegistrationsSecurity security) {
        this.security = security;
        return this;
    }
}