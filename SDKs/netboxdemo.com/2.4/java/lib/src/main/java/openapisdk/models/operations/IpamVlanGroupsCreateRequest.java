package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamVlanGroupsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVlanGroupInput request;
    public IpamVlanGroupsCreateRequest withRequest(openapisdk.models.shared.WritableVlanGroupInput request) {
        this.request = request;
        return this;
    }
}