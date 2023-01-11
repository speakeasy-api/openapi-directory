package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCustomPageRequest {
    public UpdateCustomPagePathParams pathParams;
    public UpdateCustomPageRequest withPathParams(UpdateCustomPagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomPage request;
    public UpdateCustomPageRequest withRequest(openapisdk.models.shared.CustomPage request) {
        this.request = request;
        return this;
    }
    public UpdateCustomPageSecurity security;
    public UpdateCustomPageRequest withSecurity(UpdateCustomPageSecurity security) {
        this.security = security;
        return this;
    }
}