package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBrandRegistrationsRequest {
    public String serverURL;
    public CreateBrandRegistrationsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateBrandRegistrationsCreateBrandRegistrationsRequest request;
    public CreateBrandRegistrationsRequest withRequest(CreateBrandRegistrationsCreateBrandRegistrationsRequest request) {
        this.request = request;
        return this;
    }
    public CreateBrandRegistrationsSecurity security;
    public CreateBrandRegistrationsRequest withSecurity(CreateBrandRegistrationsSecurity security) {
        this.security = security;
        return this;
    }
}