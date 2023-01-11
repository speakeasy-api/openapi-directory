package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchApiKeyFromGroupRequest {
    public PatchApiKeyFromGroupPathParams pathParams;
    public PatchApiKeyFromGroupRequest withPathParams(PatchApiKeyFromGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Patch[] request;
    public PatchApiKeyFromGroupRequest withRequest(openapisdk.models.shared.Patch[] request) {
        this.request = request;
        return this;
    }
    public PatchApiKeyFromGroupSecurity security;
    public PatchApiKeyFromGroupRequest withSecurity(PatchApiKeyFromGroupSecurity security) {
        this.security = security;
        return this;
    }
}