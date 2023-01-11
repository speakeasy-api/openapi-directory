package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVersionRequest {
    public UpdateVersionPathParams pathParams;
    public UpdateVersionRequest withPathParams(UpdateVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Version request;
    public UpdateVersionRequest withRequest(openapisdk.models.shared.Version request) {
        this.request = request;
        return this;
    }
    public UpdateVersionSecurity security;
    public UpdateVersionRequest withSecurity(UpdateVersionSecurity security) {
        this.security = security;
        return this;
    }
}