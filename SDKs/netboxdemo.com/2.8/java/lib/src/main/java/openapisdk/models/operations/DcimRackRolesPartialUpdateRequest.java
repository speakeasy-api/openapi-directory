package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRackRolesPartialUpdateRequest {
    public DcimRackRolesPartialUpdatePathParams pathParams;
    public DcimRackRolesPartialUpdateRequest withPathParams(DcimRackRolesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RackRoleInput request;
    public DcimRackRolesPartialUpdateRequest withRequest(openapisdk.models.shared.RackRoleInput request) {
        this.request = request;
        return this;
    }
}