package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchGlobalConfigRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Patch[] request;
    public PatchGlobalConfigRequest withRequest(openapisdk.models.shared.Patch[] request) {
        this.request = request;
        return this;
    }
    public PatchGlobalConfigSecurity security;
    public PatchGlobalConfigRequest withSecurity(PatchGlobalConfigSecurity security) {
        this.security = security;
        return this;
    }
}