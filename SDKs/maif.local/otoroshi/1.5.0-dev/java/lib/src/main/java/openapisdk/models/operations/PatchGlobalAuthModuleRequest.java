package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchGlobalAuthModuleRequest {
    public PatchGlobalAuthModulePathParams pathParams;
    public PatchGlobalAuthModuleRequest withPathParams(PatchGlobalAuthModulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Patch[] request;
    public PatchGlobalAuthModuleRequest withRequest(openapisdk.models.shared.Patch[] request) {
        this.request = request;
        return this;
    }
    public PatchGlobalAuthModuleSecurity security;
    public PatchGlobalAuthModuleRequest withSecurity(PatchGlobalAuthModuleSecurity security) {
        this.security = security;
        return this;
    }
}