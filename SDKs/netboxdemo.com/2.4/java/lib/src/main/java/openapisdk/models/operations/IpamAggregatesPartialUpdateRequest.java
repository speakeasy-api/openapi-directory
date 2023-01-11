package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamAggregatesPartialUpdateRequest {
    public IpamAggregatesPartialUpdatePathParams pathParams;
    public IpamAggregatesPartialUpdateRequest withPathParams(IpamAggregatesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableAggregateInput request;
    public IpamAggregatesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableAggregateInput request) {
        this.request = request;
        return this;
    }
}