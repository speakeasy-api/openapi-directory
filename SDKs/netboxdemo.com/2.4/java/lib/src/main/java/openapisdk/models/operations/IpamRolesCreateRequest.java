package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamRolesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RoleInput request;
    public IpamRolesCreateRequest withRequest(openapisdk.models.shared.RoleInput request) {
        this.request = request;
        return this;
    }
}