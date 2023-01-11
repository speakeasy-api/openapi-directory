package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceRequest {
    public String serverURL;
    public CreateServiceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateServiceCreateServiceRequest request;
    public CreateServiceRequest withRequest(CreateServiceCreateServiceRequest request) {
        this.request = request;
        return this;
    }
    public CreateServiceSecurity security;
    public CreateServiceRequest withSecurity(CreateServiceSecurity security) {
        this.security = security;
        return this;
    }
}