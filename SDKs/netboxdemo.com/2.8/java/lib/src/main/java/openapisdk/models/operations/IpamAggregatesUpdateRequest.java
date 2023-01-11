package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamAggregatesUpdateRequest {
    public IpamAggregatesUpdatePathParams pathParams;
    public IpamAggregatesUpdateRequest withPathParams(IpamAggregatesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableAggregateInput request;
    public IpamAggregatesUpdateRequest withRequest(openapisdk.models.shared.WritableAggregateInput request) {
        this.request = request;
        return this;
    }
}