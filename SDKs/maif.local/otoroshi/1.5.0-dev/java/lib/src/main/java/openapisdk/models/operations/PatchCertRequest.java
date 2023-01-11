package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchCertRequest {
    public PatchCertPathParams pathParams;
    public PatchCertRequest withPathParams(PatchCertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Patch[] request;
    public PatchCertRequest withRequest(openapisdk.models.shared.Patch[] request) {
        this.request = request;
        return this;
    }
    public PatchCertSecurity security;
    public PatchCertRequest withSecurity(PatchCertSecurity security) {
        this.security = security;
        return this;
    }
}