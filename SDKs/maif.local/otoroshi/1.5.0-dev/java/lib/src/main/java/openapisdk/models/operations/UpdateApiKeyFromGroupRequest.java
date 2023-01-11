package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApiKeyFromGroupRequest {
    public UpdateApiKeyFromGroupPathParams pathParams;
    public UpdateApiKeyFromGroupRequest withPathParams(UpdateApiKeyFromGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApiKey request;
    public UpdateApiKeyFromGroupRequest withRequest(openapisdk.models.shared.ApiKey request) {
        this.request = request;
        return this;
    }
    public UpdateApiKeyFromGroupSecurity security;
    public UpdateApiKeyFromGroupRequest withSecurity(UpdateApiKeyFromGroupSecurity security) {
        this.security = security;
        return this;
    }
}