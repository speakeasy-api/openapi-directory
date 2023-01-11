package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchServiceRequest {
    public PatchServicePathParams pathParams;
    public PatchServiceRequest withPathParams(PatchServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Patch[] request;
    public PatchServiceRequest withRequest(openapisdk.models.shared.Patch[] request) {
        this.request = request;
        return this;
    }
    public PatchServiceSecurity security;
    public PatchServiceRequest withSecurity(PatchServiceSecurity security) {
        this.security = security;
        return this;
    }
}