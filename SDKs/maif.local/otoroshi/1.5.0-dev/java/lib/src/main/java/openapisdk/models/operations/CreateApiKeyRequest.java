package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApiKeyRequest {
    public CreateApiKeyPathParams pathParams;
    public CreateApiKeyRequest withPathParams(CreateApiKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApiKey request;
    public CreateApiKeyRequest withRequest(openapisdk.models.shared.ApiKey request) {
        this.request = request;
        return this;
    }
    public CreateApiKeySecurity security;
    public CreateApiKeyRequest withSecurity(CreateApiKeySecurity security) {
        this.security = security;
        return this;
    }
}