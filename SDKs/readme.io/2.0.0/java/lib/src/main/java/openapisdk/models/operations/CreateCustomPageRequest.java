package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomPageRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomPage request;
    public CreateCustomPageRequest withRequest(openapisdk.models.shared.CustomPage request) {
        this.request = request;
        return this;
    }
    public CreateCustomPageSecurity security;
    public CreateCustomPageRequest withSecurity(CreateCustomPageSecurity security) {
        this.security = security;
        return this;
    }
}