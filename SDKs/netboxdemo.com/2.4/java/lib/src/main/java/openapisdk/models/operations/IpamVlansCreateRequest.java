package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamVlansCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVlanInput request;
    public IpamVlansCreateRequest withRequest(openapisdk.models.shared.WritableVlanInput request) {
        this.request = request;
        return this;
    }
}