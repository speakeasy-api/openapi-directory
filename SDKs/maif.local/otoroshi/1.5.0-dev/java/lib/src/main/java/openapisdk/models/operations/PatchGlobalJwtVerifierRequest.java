package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchGlobalJwtVerifierRequest {
    public PatchGlobalJwtVerifierPathParams pathParams;
    public PatchGlobalJwtVerifierRequest withPathParams(PatchGlobalJwtVerifierPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Patch[] request;
    public PatchGlobalJwtVerifierRequest withRequest(openapisdk.models.shared.Patch[] request) {
        this.request = request;
        return this;
    }
    public PatchGlobalJwtVerifierSecurity security;
    public PatchGlobalJwtVerifierRequest withSecurity(PatchGlobalJwtVerifierSecurity security) {
        this.security = security;
        return this;
    }
}