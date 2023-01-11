package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceTargetsRequest {
    public UpdateServiceTargetsPathParams pathParams;
    public UpdateServiceTargetsRequest withPathParams(UpdateServiceTargetsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Patch[] request;
    public UpdateServiceTargetsRequest withRequest(openapisdk.models.shared.Patch[] request) {
        this.request = request;
        return this;
    }
    public UpdateServiceTargetsSecurity security;
    public UpdateServiceTargetsRequest withSecurity(UpdateServiceTargetsSecurity security) {
        this.security = security;
        return this;
    }
}