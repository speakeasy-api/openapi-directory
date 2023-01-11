package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchApiKeyRequest {
    public PatchApiKeyPathParams pathParams;
    public PatchApiKeyRequest withPathParams(PatchApiKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Patch[] request;
    public PatchApiKeyRequest withRequest(openapisdk.models.shared.Patch[] request) {
        this.request = request;
        return this;
    }
    public PatchApiKeySecurity security;
    public PatchApiKeyRequest withSecurity(PatchApiKeySecurity security) {
        this.security = security;
        return this;
    }
}