package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamVlanGroupsPartialUpdateRequest {
    public IpamVlanGroupsPartialUpdatePathParams pathParams;
    public IpamVlanGroupsPartialUpdateRequest withPathParams(IpamVlanGroupsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVlanGroupInput request;
    public IpamVlanGroupsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableVlanGroupInput request) {
        this.request = request;
        return this;
    }
}