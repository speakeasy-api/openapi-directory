package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApiKeyFromGroupRequest {
    public CreateApiKeyFromGroupPathParams pathParams;
    public CreateApiKeyFromGroupRequest withPathParams(CreateApiKeyFromGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApiKey request;
    public CreateApiKeyFromGroupRequest withRequest(openapisdk.models.shared.ApiKey request) {
        this.request = request;
        return this;
    }
    public CreateApiKeyFromGroupSecurity security;
    public CreateApiKeyFromGroupRequest withSecurity(CreateApiKeyFromGroupSecurity security) {
        this.security = security;
        return this;
    }
}