package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamVlansPartialUpdateRequest {
    public IpamVlansPartialUpdatePathParams pathParams;
    public IpamVlansPartialUpdateRequest withPathParams(IpamVlansPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVlanInput request;
    public IpamVlansPartialUpdateRequest withRequest(openapisdk.models.shared.WritableVlanInput request) {
        this.request = request;
        return this;
    }
}