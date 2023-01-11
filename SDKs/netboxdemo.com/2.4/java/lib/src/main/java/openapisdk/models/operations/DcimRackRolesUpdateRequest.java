package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRackRolesUpdateRequest {
    public DcimRackRolesUpdatePathParams pathParams;
    public DcimRackRolesUpdateRequest withPathParams(DcimRackRolesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RackRoleInput request;
    public DcimRackRolesUpdateRequest withRequest(openapisdk.models.shared.RackRoleInput request) {
        this.request = request;
        return this;
    }
}