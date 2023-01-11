package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomerProfileRequest {
    public String serverURL;
    public CreateCustomerProfileRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateCustomerProfileCreateCustomerProfileRequest request;
    public CreateCustomerProfileRequest withRequest(CreateCustomerProfileCreateCustomerProfileRequest request) {
        this.request = request;
        return this;
    }
    public CreateCustomerProfileSecurity security;
    public CreateCustomerProfileRequest withSecurity(CreateCustomerProfileSecurity security) {
        this.security = security;
        return this;
    }
}