package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamVlanGroupsUpdateRequest {
    public IpamVlanGroupsUpdatePathParams pathParams;
    public IpamVlanGroupsUpdateRequest withPathParams(IpamVlanGroupsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVlanGroupInput request;
    public IpamVlanGroupsUpdateRequest withRequest(openapisdk.models.shared.WritableVlanGroupInput request) {
        this.request = request;
        return this;
    }
}