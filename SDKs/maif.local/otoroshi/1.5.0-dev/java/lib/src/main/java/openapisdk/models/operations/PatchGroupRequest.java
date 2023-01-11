package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchGroupRequest {
    public PatchGroupPathParams pathParams;
    public PatchGroupRequest withPathParams(PatchGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Patch[] request;
    public PatchGroupRequest withRequest(openapisdk.models.shared.Patch[] request) {
        this.request = request;
        return this;
    }
    public PatchGroupSecurity security;
    public PatchGroupRequest withSecurity(PatchGroupSecurity security) {
        this.security = security;
        return this;
    }
}