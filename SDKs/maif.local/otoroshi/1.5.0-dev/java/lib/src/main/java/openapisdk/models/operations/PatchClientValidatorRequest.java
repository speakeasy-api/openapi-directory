package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchClientValidatorRequest {
    public PatchClientValidatorPathParams pathParams;
    public PatchClientValidatorRequest withPathParams(PatchClientValidatorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Patch[] request;
    public PatchClientValidatorRequest withRequest(openapisdk.models.shared.Patch[] request) {
        this.request = request;
        return this;
    }
    public PatchClientValidatorSecurity security;
    public PatchClientValidatorRequest withSecurity(PatchClientValidatorSecurity security) {
        this.security = security;
        return this;
    }
}