package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRackRolesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RackRoleInput request;
    public DcimRackRolesCreateRequest withRequest(openapisdk.models.shared.RackRoleInput request) {
        this.request = request;
        return this;
    }
}