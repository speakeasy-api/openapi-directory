package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateChangelogRequest {
    public UpdateChangelogPathParams pathParams;
    public UpdateChangelogRequest withPathParams(UpdateChangelogPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Changelog request;
    public UpdateChangelogRequest withRequest(openapisdk.models.shared.Changelog request) {
        this.request = request;
        return this;
    }
    public UpdateChangelogSecurity security;
    public UpdateChangelogRequest withSecurity(UpdateChangelogSecurity security) {
        this.security = security;
        return this;
    }
}