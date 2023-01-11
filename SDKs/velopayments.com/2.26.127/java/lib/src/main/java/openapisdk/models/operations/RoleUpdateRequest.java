package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RoleUpdateRequest {
    public RoleUpdatePathParams pathParams;
    public RoleUpdateRequest withPathParams(RoleUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RoleUpdateRequest request;
    public RoleUpdateRequest withRequest(openapisdk.models.shared.RoleUpdateRequest request) {
        this.request = request;
        return this;
    }
}