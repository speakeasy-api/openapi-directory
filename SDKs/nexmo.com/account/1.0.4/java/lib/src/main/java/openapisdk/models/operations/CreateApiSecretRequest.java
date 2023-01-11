package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApiSecretRequest {
    public CreateApiSecretPathParams pathParams;
    public CreateApiSecretRequest withPathParams(CreateApiSecretPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateSecretRequest request;
    public CreateApiSecretRequest withRequest(openapisdk.models.shared.CreateSecretRequest request) {
        this.request = request;
        return this;
    }
    public CreateApiSecretSecurity security;
    public CreateApiSecretRequest withSecurity(CreateApiSecretSecurity security) {
        this.security = security;
        return this;
    }
}