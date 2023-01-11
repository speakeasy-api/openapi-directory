package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchScriptRequest {
    public PatchScriptPathParams pathParams;
    public PatchScriptRequest withPathParams(PatchScriptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Patch[] request;
    public PatchScriptRequest withRequest(openapisdk.models.shared.Patch[] request) {
        this.request = request;
        return this;
    }
    public PatchScriptSecurity security;
    public PatchScriptRequest withSecurity(PatchScriptSecurity security) {
        this.security = security;
        return this;
    }
}