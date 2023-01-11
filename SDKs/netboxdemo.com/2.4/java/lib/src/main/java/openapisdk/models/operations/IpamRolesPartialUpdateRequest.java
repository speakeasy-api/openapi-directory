package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamRolesPartialUpdateRequest {
    public IpamRolesPartialUpdatePathParams pathParams;
    public IpamRolesPartialUpdateRequest withPathParams(IpamRolesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RoleInput request;
    public IpamRolesPartialUpdateRequest withRequest(openapisdk.models.shared.RoleInput request) {
        this.request = request;
        return this;
    }
}