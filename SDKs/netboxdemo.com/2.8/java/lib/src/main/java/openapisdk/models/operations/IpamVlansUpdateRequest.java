package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamVlansUpdateRequest {
    public IpamVlansUpdatePathParams pathParams;
    public IpamVlansUpdateRequest withPathParams(IpamVlansUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVlanInput request;
    public IpamVlansUpdateRequest withRequest(openapisdk.models.shared.WritableVlanInput request) {
        this.request = request;
        return this;
    }
}