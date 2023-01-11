package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamAggregatesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableAggregateInput request;
    public IpamAggregatesCreateRequest withRequest(openapisdk.models.shared.WritableAggregateInput request) {
        this.request = request;
        return this;
    }
}