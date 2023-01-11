package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateClientValidatorRequest {
    public UpdateClientValidatorPathParams pathParams;
    public UpdateClientValidatorRequest withPathParams(UpdateClientValidatorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ValidationAuthority request;
    public UpdateClientValidatorRequest withRequest(openapisdk.models.shared.ValidationAuthority request) {
        this.request = request;
        return this;
    }
    public UpdateClientValidatorSecurity security;
    public UpdateClientValidatorRequest withSecurity(UpdateClientValidatorSecurity security) {
        this.security = security;
        return this;
    }
}