package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGroupRequest {
    public UpdateGroupPathParams pathParams;
    public UpdateGroupRequest withPathParams(UpdateGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Group request;
    public UpdateGroupRequest withRequest(openapisdk.models.shared.Group request) {
        this.request = request;
        return this;
    }
    public UpdateGroupSecurity security;
    public UpdateGroupRequest withSecurity(UpdateGroupSecurity security) {
        this.security = security;
        return this;
    }
}