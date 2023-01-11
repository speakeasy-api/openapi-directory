package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamRolesUpdateRequest {
    public IpamRolesUpdatePathParams pathParams;
    public IpamRolesUpdateRequest withPathParams(IpamRolesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RoleInput request;
    public IpamRolesUpdateRequest withRequest(openapisdk.models.shared.RoleInput request) {
        this.request = request;
        return this;
    }
}