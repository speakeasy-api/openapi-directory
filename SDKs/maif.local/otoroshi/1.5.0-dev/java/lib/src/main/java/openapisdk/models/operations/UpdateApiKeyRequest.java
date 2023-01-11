package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApiKeyRequest {
    public UpdateApiKeyPathParams pathParams;
    public UpdateApiKeyRequest withPathParams(UpdateApiKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApiKey request;
    public UpdateApiKeyRequest withRequest(openapisdk.models.shared.ApiKey request) {
        this.request = request;
        return this;
    }
    public UpdateApiKeySecurity security;
    public UpdateApiKeyRequest withSecurity(UpdateApiKeySecurity security) {
        this.security = security;
        return this;
    }
}