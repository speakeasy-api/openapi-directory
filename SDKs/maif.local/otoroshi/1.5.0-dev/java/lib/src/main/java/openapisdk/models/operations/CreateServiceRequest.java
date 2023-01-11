package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Service request;
    public CreateServiceRequest withRequest(openapisdk.models.shared.Service request) {
        this.request = request;
        return this;
    }
    public CreateServiceSecurity security;
    public CreateServiceRequest withSecurity(CreateServiceSecurity security) {
        this.security = security;
        return this;
    }
}