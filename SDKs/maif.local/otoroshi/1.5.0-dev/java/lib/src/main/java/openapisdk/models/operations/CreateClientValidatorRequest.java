package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateClientValidatorRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ValidationAuthority request;
    public CreateClientValidatorRequest withRequest(openapisdk.models.shared.ValidationAuthority request) {
        this.request = request;
        return this;
    }
    public CreateClientValidatorSecurity security;
    public CreateClientValidatorRequest withSecurity(CreateClientValidatorSecurity security) {
        this.security = security;
        return this;
    }
}